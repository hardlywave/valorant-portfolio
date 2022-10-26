import { useEffect, useState } from "react";
import { IWeapon } from "../interfaces/models";
import axios from "axios";

const useWeapons = () => {
  const [weapons, setWeapons] = useState<IWeapon[]>([]);
  const [loading, setLoading] = useState(false);

  async function getWeapons() {
    setLoading(true);
    const response = await axios
      .get<IWeapon[], any>(`https://valorant-api.com/v1/weapons`)
      .then((res) => res.data);
    setWeapons(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getWeapons();
  }, []);
  return { weapons, loading };
};

export default useWeapons;
