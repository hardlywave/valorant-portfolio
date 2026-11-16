import { useMemo } from "react";
import { IAgent } from "../interfaces/IAgent";
import { IPlayerCard, ISpray } from "../interfaces/ICosmetics";
import useValorantData from "./useValorantData";

// The API does not link sprays or player cards to agents, so they are matched
// by the agent's name appearing as a whole word in the item's name.
const nameMatcher = (name: string) =>
  new RegExp(`(^|[^a-z])${name.replace(/[^a-z0-9]/gi, "\\$&")}([^a-z]|$)`, "i");

const useAgentExtras = (agent: IAgent | undefined) => {
  const { data: allSprays } = useValorantData<ISpray>("/sprays");
  const { data: allCards } = useValorantData<IPlayerCard>("/playercards");
  const name = agent?.displayName;

  return useMemo(() => {
    if (!name) return { sprays: [], cards: [] };
    const matcher = nameMatcher(name);
    return {
      sprays: allSprays
        .filter(
          (spray) =>
            matcher.test(spray.displayName) &&
            (spray.fullTransparentIcon || spray.displayIcon)
        )
        .slice(0, 4),
      cards: allCards
        .filter((card) => matcher.test(card.displayName) && card.displayIcon)
        .slice(0, 4),
    };
  }, [name, allSprays, allCards]);
};

export default useAgentExtras;
