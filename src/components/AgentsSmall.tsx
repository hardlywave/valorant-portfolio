import { IAgent } from "../models";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

interface AgentProps {
  agent: IAgent;
}

const AgentsSmall = ({ agent }: AgentProps) => {
  return (
    <ListItem>
      <ListItemButton
        onClick={() => alert(agent.uuid)}
        sx={{
          py: 0,
          minHeight: 32,
          width: "100%",
          borderRadius: "7px",
          backgroundImage: `linear-gradient(to bottom, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[1]}, #${agent.backgroundGradientColors[2]}, #${agent.backgroundGradientColors[3]})`,
          color: `#${agent.backgroundGradientColors[1]}`,
        }}
      >
        <Avatar alt={`Avatar n°${agent.displayName}`} src={agent.displayIcon} />
        <Box sx={{ pl: "10px" }}>
          <ListItemText
            primary={agent.displayName}
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: "medium",
              color: "black",
            }}
          />
          <ListItemText
            primary={agent.role.displayName}
            primaryTypographyProps={{
              fontSize: 11,
              fontWeight: "medium",
              color: "silver",
            }}
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};
export default AgentsSmall;
