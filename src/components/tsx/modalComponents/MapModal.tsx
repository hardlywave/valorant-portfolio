import "../../scss/Modal.scss";
import { IMap } from "../../../interfaces/models";
import ModalCloseButton from "./components/ModalCloseButton";

interface MapProps {
  map: IMap;
  setClose: (value: boolean) => void;
}

const MapModal = ({ map, setClose }: MapProps) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-content-image-container">
            <div className="content-image">
              <img
                className="content-image-background"
                alt={map.displayName}
                srcSet={map.splash}
              />
            </div>
          </div>
          <div className="modal-container-info">
            <div className="modal-info-box">
              <p
                className="modal-info-name"
                style={{
                  backgroundImage: `url(${map.splash})`,
                  backgroundPosition: "left",
                }}
              >
                {map.displayName}
              </p>
              <span className="modal-info-coordinates">
                Coordinates: {map.coordinates}
              </span>
            </div>
            <div className="modal-info-image-box">
              {map.displayIcon ? (
                <img
                  className="modal-info-image-map"
                  alt={`${map.displayName}`}
                  srcSet={map.displayIcon}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="close-icon-box">
            <ModalCloseButton setClose={setClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MapModal;
