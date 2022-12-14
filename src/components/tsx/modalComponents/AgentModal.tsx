import "../../scss/Modal.scss";
import { IAgent } from "../../../interfaces/IAgent";
import ModalCloseButton from "./components/ModalCloseButton";
import { useEffect } from "react";

interface AgentProps {
  agent: IAgent;
  setClose: (value: boolean) => void;
}

const AgentModal = ({ agent, setClose }: AgentProps) => {
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
          <div
            className="modal-content-image-container"
            style={{
              backgroundImage: `linear-gradient(to bottom, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
            }}
          >
            <div className="content-image">
              <img
                style={{ opacity: 0.6, height: "100%" }}
                src={`${agent.background}?w=248&fit=crop&auto=format`}
                srcSet={`${agent.background}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={agent.displayName}
              />
              <img
                className="content-image-portrait"
                src={`${agent.fullPortrait}?w=248&fit=crop&auto=format`}
                srcSet={`${agent.fullPortrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={agent.displayName}
              />
            </div>
          </div>
          <div className="modal-container-info">
            <div className="modal-info-box">
              <p
                className="modal-info-name"
                style={{
                  backgroundImage: `linear-gradient(to right, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
                }}
              >
                {agent.displayName}
              </p>

              <p className="agent-info-dev-name">
                Developer name: {agent.developerName}
              </p>
              <span className="modal-info-description">
                {agent.description}
              </span>
            </div>
            <div className="abilities-list">
              {agent.abilities.map((el) => (
                <div key={el.displayName} className="abilities-container">
                  <div className="abilities-header">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4 className="abilities-header-name">
                        {el.displayName}
                      </h4>
                      <span className="abilities-header-slot">{el.slot}</span>
                    </div>
                    {el.displayIcon ? (
                      <img
                        className="abilities-header-logo"
                        alt={`${el.displayName}`}
                        srcSet={el.displayIcon}
                      />
                    ) : (
                      <label className="abilities-header-logo-label">
                        <span>Img error</span>
                      </label>
                    )}
                  </div>
                  <span className="abilities-description">
                    {el.description}
                  </span>
                </div>
              ))}
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

export default AgentModal;
