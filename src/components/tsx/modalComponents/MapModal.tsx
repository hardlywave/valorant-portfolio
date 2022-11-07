import "../../scss/Modal.scss";
import { IMap } from "../../../interfaces/IMap";
import ModalCloseButton from "./components/ModalCloseButton";
import { useEffect } from "react";

interface MapProps {
  map: IMap;
  setClose: (value: boolean) => void;
}

const MapModal = ({ map, setClose }: MapProps) => {
  const eventHandler = () => {
    setClose(false);
  };
  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        setClose(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return (
    <>
      <div className="modal-container" onClick={eventHandler}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
