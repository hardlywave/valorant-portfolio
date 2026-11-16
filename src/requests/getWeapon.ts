import { IWeapon } from "../interfaces/IWeapon";
import useValorantData from "./useValorantData";

const useWeapons = () => {
  const { data, loading, error } = useValorantData<IWeapon>("/weapons");
  return { weapons: data, loading, error };
};

export default useWeapons;
