import { useEffect, useState } from "react";
import { IAgent } from "../interfaces/IAgent";
import axios from "axios";

const useAgents = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState(false);

  async function getAgents() {
    setLoading(true);
    const response = await axios
      .get<IAgent[], any>(
        `https://valorant-api.com/v1/agents?isPlayableCharacter=true`
      )
      .then((res) => res.data);
    setAgents(response.data);
    setTimeout(() => setLoading(false), 1000);
  }

  useEffect(() => {
    getAgents();
  }, []);
  return { agents, loading };
};

export default useAgents;
