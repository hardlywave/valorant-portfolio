import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../components/scss/AgentPage.scss";

import useAgents from "../requests/getAgents";
import useAgentExtras from "../requests/getAgentExtras";
import Loader from "../components/tsx/mainComponents/Loader";
import LoadError from "../components/tsx/mainComponents/LoadError";
import MaskIcon from "../components/tsx/mainComponents/MaskIcon";
import { agentPath, agentSlug, plainText, sortByName } from "../utils/agent";

const AgentPage = () => {
  const { slug } = useParams();
  const { loading, error, agents } = useAgents();
  const [abilityIndex, setAbilityIndex] = useState(0);

  const sorted = useMemo(() => sortByName(agents), [agents]);
  const index = sorted.findIndex((item) => agentSlug(item) === slug);
  const agent = sorted[index];
  const { sprays, cards } = useAgentExtras(agent);

  useEffect(() => {
    setAbilityIndex(0);
  }, [slug]);

  if (loading) return <Loader loading />;
  if (error) return <LoadError />;
  if (!agent) {
    return (
      <div className="status">
        <strong>Agent not found</strong>
        <Link to="/agents" className="btn">
          All agents
        </Link>
      </div>
    );
  }

  const ability = agent.abilities[abilityIndex] || agent.abilities[0];
  const previous = sorted[(index - 1 + sorted.length) % sorted.length];
  const next = sorted[(index + 1) % sorted.length];

  return (
    <main className="agent">
      <img className="agent-ghost" src={agent.fullPortrait} alt="" />

      <section className="agent-main">
        <div className="agent-title">
          <h1 className="agent-name">{agent.displayName}</h1>
          <span className="agent-role-badge">
            <MaskIcon
              src={agent.role.displayIcon}
              size={34}
              label={agent.role.displayName}
            />
          </span>
        </div>
        <p className="agent-subtitle">{agent.role.displayName}</p>
        <p className="agent-description">{agent.description}</p>

        {cards.length > 0 && (
          <div className="agent-cards">
            {cards.map((card) => (
              <img
                key={card.uuid}
                src={card.displayIcon || ""}
                alt={card.displayName}
                title={card.displayName}
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className="marker" />

        <nav className="agent-pager" aria-label="Other agents">
          <Link to={agentPath(previous)}>← {previous.displayName}</Link>
          <Link to="/agents">All agents</Link>
          <Link to={agentPath(next)}>{next.displayName} →</Link>
        </nav>
      </section>

      <div className="agent-stage">
        <img
          className="agent-portrait"
          src={agent.fullPortrait}
          alt={agent.displayName}
        />
      </div>

      <aside className="agent-side">
        <section>
          <h2 className="section-title">
            About {agent.role.displayName}s
            <MaskIcon src={agent.role.displayIcon} size={22} />
          </h2>
          <p className="agent-side-text">{agent.role.description}</p>
        </section>

        <section>
          <h2 className="section-title">Skill</h2>
          <div className="agent-skills">
            {agent.abilities.map((item, itemIndex) => (
              <button
                key={item.slot + item.displayName}
                className={`agent-skill${
                  item === ability ? " is-active" : ""
                }`}
                aria-pressed={item === ability}
                aria-label={item.displayName}
                title={item.displayName}
                onClick={() => setAbilityIndex(itemIndex)}
              >
                {item.displayIcon ? (
                  <MaskIcon src={item.displayIcon} size={30} />
                ) : (
                  <span className="agent-skill-letter">
                    {item.slot.charAt(0)}
                  </span>
                )}
              </button>
            ))}
          </div>
          {ability && (
            <div className="agent-skill-detail" aria-live="polite">
              <h3>{ability.displayName}</h3>
              <span>{ability.slot}</span>
              <p className="agent-side-text">
                {plainText(ability.description)}
              </p>
            </div>
          )}
        </section>

        {sprays.length > 0 && (
          <section>
            <h2 className="section-title">Spray</h2>
            <div className="agent-sprays">
              {sprays.map((spray) => (
                <img
                  key={spray.uuid}
                  src={spray.fullTransparentIcon || spray.displayIcon || ""}
                  alt={spray.displayName}
                  title={spray.displayName}
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}
      </aside>

      <div className="hatch agent-hatch" />
    </main>
  );
};

export default AgentPage;
