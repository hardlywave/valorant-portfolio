import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../components/scss/MainPage.scss";

import useAgents from "../requests/getAgents";
import MaskIcon from "../components/tsx/mainComponents/MaskIcon";
import { agentPath, sortByName } from "../utils/agent";

// Background loop of the hero on playvalorant.com. If Riot moves the file
// again the hero falls back to the striped backdrop instead of a blank page.
const HERO_VIDEO =
  "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news_live/74d9d9fd8664d1c431b4b82d007f968eacb3e8b4.mp4";

const FEATURED_AGENT = "Sage";

const MainPage = () => {
  const { agents } = useAgents();
  const [videoFailed, setVideoFailed] = useState(false);
  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  const sorted = useMemo(() => sortByName(agents), [agents]);
  const featured =
    sorted.find((agent) => agent.uuid === selectedUuid) ||
    sorted.find((agent) => agent.displayName === FEATURED_AGENT) ||
    sorted[0];

  return (
    <main>
      <section className="hero">
        {!videoFailed && (
          <video
            className="hero-video"
            src={HERO_VIDEO}
            muted
            loop
            playsInline
            autoPlay
            onError={() => setVideoFailed(true)}
          />
        )}
        <div className="hero-content">
          <p className="hero-kicker">Unofficial fan wiki</p>
          <h1 className="hero-title">
            Know your
            <br />
            agents
          </h1>
          <p className="hero-text">
            Every agent, map and weapon in one place, loaded live from the
            Valorant API.
          </p>
          <div className="hero-actions">
            <Link to="/agents" className="btn">
              Browse agents
            </Link>
            <Link to="/maps" className="btn btn--ghost">
              Maps
            </Link>
            <Link to="/weapons" className="btn btn--ghost">
              Weapons
            </Link>
          </div>
        </div>
        <div className="hatch hero-hatch" />
      </section>

      {featured && (
        <section className="spotlight">
          <div className="spotlight-stage">
            <img
              key={featured.uuid}
              className="spotlight-portrait"
              src={featured.fullPortrait}
              alt={featured.displayName}
            />
          </div>
          <div className="spotlight-info">
            <div className="marker" />
            <div className="spotlight-title">
              <h2>{featured.displayName}</h2>
              <MaskIcon src={featured.role.displayIcon} size={40} />
            </div>
            <p className="spotlight-role">{featured.role.displayName}</p>
            <p className="spotlight-text">{featured.description}</p>
            <Link to={agentPath(featured)} className="btn">
              Open profile
            </Link>
            <div className="roster" role="group" aria-label="Choose an agent">
              {sorted.map((agent) => (
                <button
                  key={agent.uuid}
                  className={`roster-item${
                    agent === featured ? " is-active" : ""
                  }`}
                  aria-pressed={agent === featured}
                  aria-label={agent.displayName}
                  title={agent.displayName}
                  onClick={() => setSelectedUuid(agent.uuid)}
                >
                  <img src={agent.displayIconSmall} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="explore">
        <Link to="/maps" className="explore-tile">
          <span className="explore-label">Maps</span>
          <span className="explore-text">
            Splash art, coordinates and minimaps for every location.
          </span>
          <span className="explore-arrow">→</span>
        </Link>
        <Link to="/weapons" className="explore-tile">
          <span className="explore-label">Weapons</span>
          <span className="explore-text">
            The full arsenal with stats, prices and every skin.
          </span>
          <span className="explore-arrow">→</span>
        </Link>
      </section>
    </main>
  );
};

export default MainPage;
