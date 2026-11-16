import { IMap } from "../interfaces/IMap";
import useValorantData from "./useValorantData";

const useMaps = () => {
  const { data, loading, error } = useValorantData<IMap>("/maps");
  return { maps: data, loading, error };
};

export default useMaps;
