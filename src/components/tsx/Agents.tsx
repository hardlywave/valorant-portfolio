import { IAgent } from "../../interfaces/IAgent";
import ListItemButton from "@mui/material/ListItemButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React, { useState } from "react";
import AgentModal from "./modalComponents/AgentModal";

interface AgentProps {
  agent: IAgent;
}

const Agents = ({ agent }: AgentProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handlerOnClickEvent = () => setModalOpened(!modalOpened);

  return (
    <>
      {modalOpened && <AgentModal agent={agent} setClose={setModalOpened} />}
      <ImageListItem
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "7px",
          boxShadow: "-2px 3px 10px 6px rgb(30 30 30 / 40%)",
          transitionDuration: "0.2s",
          transform: "scale(0.96)",
          "&:hover": {
            zIndex: 1,
            transform: "scale(0.98)",
          },
        }}
      >
        <ListItemButton
          onClick={() => handlerOnClickEvent()}
          sx={{
            p: "unset",
            minHeight: 32,
            width: "100%",
            borderRadius: "7px",
            backgroundImage: `linear-gradient(to bottom, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
            justifyContent: "center",
            boxShadow: "inset 1px 3px 30px 25px rgb(30 30 30 / 50%)",
          }}
        >
          <ImageListItem key={agent.uuid} sx={{ borderRadius: "7px" }}>
            <img
              style={{ opacity: 0.6 }}
              src={`${agent.background}?w=248&fit=crop&auto=format`}
              srcSet={`${agent.background}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={agent.displayName}
            />
            <img
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "100%",
                borderRadius: "7px",
              }}
              src={`${agent.fullPortrait}?w=248&fit=crop&auto=format`}
              srcSet={`${agent.fullPortrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={agent.displayName}
            />
            <ImageListItemBar
              sx={{ fontWeight: "Bold", borderRadius: "7px" }}
              title={agent.displayName}
              subtitle={agent.role.displayName}
              actionIcon={
                <img
                  alt={`${agent.role.displayName}`}
                  style={{
                    maxHeight: 30,
                    maxWidth: 30,
                    paddingRight: 16,
                    height: "100%",
                    width: "100%",
                  }}
                  srcSet={agent.role.displayIcon}
                />
              }
            />
          </ImageListItem>
        </ListItemButton>
      </ImageListItem>
    </>
  );
};
export default Agents;
