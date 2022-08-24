import { IMap } from "../models";
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
    <ImageListItem>
      <ListItemButton
        onClick={() => alert(map.uuid)}
        sx={{
          p: "7px",
          minHeight: 32,
          width: "100%",
          borderRadius: "7px",
          justifyContent: "center",
          backgroundImage: `url(${map.splash}) cover`,
          transform: isHover ? "scale(1.02)" : "scale(1)",
          zIndex: isHover ? 1 : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ImageListItem key={map.uuid}>
          <img
            src={`${map.splash}?w=161&fit=crop&auto=format`}
            srcSet={`${map.splash}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={map.displayName}
            loading="lazy"
            style={{ borderRadius: "7px" }}
          />
          <ImageListItemBar
            sx={{
              fontWeight: "Bold",
              borderEndEndRadius: "7px",
              borderEndStartRadius: "7px",
            }}
            title={map.displayName}
          />
        </ImageListItem>
      </ListItemButton>
    </ImageListItem>
  );
};
export default Agents;
