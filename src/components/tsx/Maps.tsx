import { IMap } from "../../models";
import ListItemButton from "@mui/material/ListItemButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useState } from "react";

interface AgentProps {
  map: IMap;
}

const Agents = ({ map }: AgentProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <ImageListItem
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "7px",
      }}
    >
      <ListItemButton
        onClick={() => alert(map.uuid)}
        sx={{
          p: 0,
          width: "100%",
          borderRadius: "7px",
          justifyContent: "center",
          transform: isHover ? "scale(0.98)" : "scale(0.96)",
          boxShadow: "-2px 1px 10px 6px rgb(30 30 30 / 40%)",
          zIndex: isHover ? 1 : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ImageListItem
          key={map.uuid}
          sx={{
            borderRadius: "7px",
            boxShadow: "inset 1px 3px 30px 20px rgb(30 30 30 / 20%)",
          }}
        >
          <img
            src={`${map.splash}?w=161&fit=crop&auto=format`}
            alt={map.displayName}
            style={{ borderRadius: "7px" }}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              fontWeight: "Bold",
              borderRadius: "7px",
              border: "1px transparent",
            }}
            title={map.displayName}
          />
        </ImageListItem>
      </ListItemButton>
    </ImageListItem>
  );
};
export default Agents;
