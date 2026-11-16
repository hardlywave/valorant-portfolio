import React, { useState } from "react";
import { IMap } from "../../interfaces/IMap";
import MapModal from "./modalComponents/MapModal";

interface MapsProps {
  map: IMap;
}

const Maps = ({ map }: MapsProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      {modalOpened && <MapModal map={map} setClose={setModalOpened} />}
      <button className="tile map-tile" onClick={() => setModalOpened(true)}>
        <img src={map.splash} alt="" loading="lazy" />
        <span className="tile-info">
          <span className="tile-name">{map.displayName}</span>
          <span className="tile-meta">
            {map.tacticalDescription || "Special mode"}
          </span>
        </span>
      </button>
    </>
  );
};

export default Maps;
