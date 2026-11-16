import React from "react";
import { Link } from "react-router-dom";
import { IAgent } from "../../interfaces/IAgent";
import { agentPath } from "../../utils/agent";
import MaskIcon from "./mainComponents/MaskIcon";

interface AgentProps {
  agent: IAgent;
}

const Agents = ({ agent }: AgentProps) => (
  <Link to={agentPath(agent)} className="agent-card">
    <div className="agent-card-stage">
      <img
        className="agent-card-portrait"
        src={agent.fullPortrait}
        alt=""
        loading="lazy"
      />
    </div>
    <div className="agent-card-info">
      <div>
        <h2 className="agent-card-name">{agent.displayName}</h2>
        <span className="agent-card-role">{agent.role.displayName}</span>
      </div>
      <MaskIcon src={agent.role.displayIcon} size={26} />
    </div>
  </Link>
);

export default Agents;
