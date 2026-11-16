import React, { useMemo, useState } from "react";
import "../components/scss/AgentsPage.scss";

import useAgents from "../requests/getAgents";
import Agents from "../components/tsx/Agents";
import Loader from "../components/tsx/mainComponents/Loader";
import LoadError from "../components/tsx/mainComponents/LoadError";
import { sortByName } from "../utils/agent";

const ALL = "All";

const AgentsPage = () => {
  const { loading, error, agents } = useAgents();
  const [role, setRole] = useState(ALL);

  const roles = useMemo(
    () =>
      [ALL].concat(
        agents
          .map((agent) => agent.role.displayName)
          .filter((name, index, all) => all.indexOf(name) === index)
          .sort()
      ),
    [agents]
  );

  const agentsList = useMemo(
    () =>
      sortByName(agents).filter(
        (agent) => role === ALL || agent.role.displayName === role
      ),
    [agents, role]
  );

  return (
    <main className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Agents</h1>
          <p className="page-subtitle">
            {agents.length > 0 && `${agents.length} agents. `}Pick one to open
            their profile, abilities and sprays.
          </p>
        </div>
        <div className="toolbar" role="group" aria-label="Filter by role">
          {roles.map((name) => (
            <button
              key={name}
              className={`chip${name === role ? " is-active" : ""}`}
              aria-pressed={name === role}
              onClick={() => setRole(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <Loader loading={loading} />
      {error && <LoadError />}
      <div className="agents-grid">
        {agentsList.map((agent) => (
          <Agents key={agent.uuid} agent={agent} />
        ))}
      </div>
    </main>
  );
};

export default AgentsPage;
