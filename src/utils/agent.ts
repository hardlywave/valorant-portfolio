import { IAgent } from "../interfaces/IAgent";

export const agentSlug = (agent: IAgent) =>
  agent.displayName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const agentPath = (agent: IAgent) => `/agents/${agentSlug(agent)}`;

// Ability texts come with in-game markup such as <whitebold>Wingman</>.
export const plainText = (text: string) => text.replace(/<[^>]*>/g, "");

export const sortByName = (agents: IAgent[]) =>
  [...agents].sort((a, b) => a.displayName.localeCompare(b.displayName));
