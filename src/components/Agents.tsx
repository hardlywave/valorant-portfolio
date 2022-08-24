import { IAgent } from "../models";
import ListItemButton from "@mui/material/ListItemButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

interface AgentProps {
  agent: IAgent;
}

const Agents = ({ agent }: AgentProps) => {
  return (
    <ImageListItem>
      <ListItemButton
        onClick={() => alert(agent.uuid)}
        sx={{
          py: 0,
          minHeight: 32,
          width: "100%",
          borderRadius: "7px",
          backgroundImage: `linear-gradient(to bottom, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
          justifyContent: "center",
        }}
      >
        <ImageListItem key={agent.uuid}>
          <img
            style={{ opacity: 0.6 }}
            src={`${agent.background}?w=248&fit=crop&auto=format`}
            srcSet={`${agent.background}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={agent.displayName}
            loading="lazy"
          />
          <img
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "100%",
            }}
            src={`${agent.fullPortrait}?w=248&fit=crop&auto=format`}
            srcSet={`${agent.fullPortrait}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={agent.displayName}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{ fontWeight: "Bold" }}
            title={agent.displayName}
            subtitle={agent.role.displayName}
            actionIcon={
              <img
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
  );
};
export default Agents;
