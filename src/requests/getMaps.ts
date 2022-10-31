import { useEffect, useState } from "react";
import { IMap } from "../interfaces/IMap";
import axios from "axios";

const useMaps = () => {
  const [maps, setMaps] = useState<IMap[]>([]);
  const [loading, setLoading] = useState(false);

  async function getMaps() {
    setLoading(true);
    const response = await axios
      .get<[], any>(`https://valorant-api.com/v1/maps`)
      .then((res) => res.data);
    setMaps(response.data);
    setTimeout(() => setLoading(false), 1000);
  }

  useEffect(() => {
    getMaps();
  }, []);
  return { maps, loading };
};

export default useMaps;
