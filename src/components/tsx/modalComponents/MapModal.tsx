import React from "react";
import { IMap } from "../../../interfaces/IMap";
import ModalShell from "./components/ModalShell";

interface MapProps {
  map: IMap;
  setClose: (value: boolean) => void;
}

const MapModal = ({ map, setClose }: MapProps) => (
  <ModalShell label={map.displayName} setClose={setClose}>
    <div className="modal-media">
      <img className="modal-media-cover" src={map.splash} alt="" />
    </div>
    <div className="modal-info">
      <h2 className="modal-title">{map.displayName}</h2>
      <dl className="modal-facts">
        {map.coordinates && (
          <div>
            <dt>Coordinates</dt>
            <dd>{map.coordinates}</dd>
          </div>
        )}
        {map.tacticalDescription && (
          <div>
            <dt>Layout</dt>
            <dd>{map.tacticalDescription}</dd>
          </div>
        )}
      </dl>
      {map.displayIcon ? (
        <img
          className="modal-minimap"
          src={map.displayIcon}
          alt={`${map.displayName} minimap`}
        />
      ) : (
        <p className="modal-note">No minimap is available for this map.</p>
      )}
    </div>
  </ModalShell>
);

export default MapModal;
