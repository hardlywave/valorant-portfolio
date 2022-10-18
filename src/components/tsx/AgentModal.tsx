import "../scss/AgentModal.scss";
import { IAgent } from "../../models";
import IconButton from "@mui/material/IconButton";

interface AgentProps {
  agent: IAgent;
  setClose: (value: boolean) => void;
}

const AgentModal = ({ agent, setClose }: AgentProps) => {
  const handlerCloseButton = () => {
    setClose(false);
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal-content">
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
                loading="lazy"
              />
            </div>
          </div>
          <div className="modal-container-info">
            <div className="agent-info-box">
              <p
                className="agent-info-name"
                style={{
                  backgroundImage: `linear-gradient(to right, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
                }}
              >
                {agent.displayName}
              </p>

              <p className="agent-info-dev-name">
                Developer name: {agent.developerName}
              </p>
              <span className="agent-info-description">
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
                    <img
                      className="abilities-header-logo"
                      alt={`${el.displayName}`}
                      style={{
                        maxHeight: 30,
                        maxWidth: 30,
                        backgroundColor: "black",
                        borderRadius: "50%",
                      }}
                      srcSet={el.displayIcon}
                    />
                  </div>
                  <span className="abilities-description">
                    {el.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <IconButton
            sx={{ position: "absolute", right: 0, top: 0 }}
            onClick={() => handlerCloseButton()}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM7.70711 15.7071L11 12.4142L14.2929 15.7071L15.7071 14.2929L12.4142 11L15.7071 7.70711L14.2929 6.29289L11 9.58579L7.70711 6.29289L6.29289 7.70711L9.58579 11L6.29289 14.2929L7.70711 15.7071Z"
                fill="black"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default AgentModal;
