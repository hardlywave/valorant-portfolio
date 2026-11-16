import { IAgent } from "../interfaces/IAgent";
import useValorantData from "./useValorantData";

const useAgents = () => {
  const { data, loading, error } = useValorantData<IAgent>(
    "/agents?isPlayableCharacter=true"
  );
  return { agents: data, loading, error };
};

export default useAgents;
