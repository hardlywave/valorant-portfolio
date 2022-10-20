import { IMap } from "../../models";
import ListItemButton from "@mui/material/ListItemButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React, { useState } from "react";
import MapModal from "./MapModal";

interface MapsProps {
  map: IMap;
}

const Maps = ({ map }: MapsProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handlerOnClickEvent = () => setModalOpened(true);
  return (
    <>
      {modalOpened && <MapModal map={map} setClose={setModalOpened} />}
      <ImageListItem
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "7px",
          transform: "scale(0.96)",
          boxShadow: "-2px 1px 10px 6px rgb(30 30 30 / 40%)",
          "&:hover": {
            transform: "scale(0.98)",
            zIndex: 1,
          },
        }}
      >
        <ListItemButton
          onClick={() => handlerOnClickEvent()}
          sx={{
            p: 0,
            width: "100%",
            borderRadius: "7px",
            justifyContent: "center",
            boxShadow: "inset 1px 3px 30px 10px rgb(30 30 30 / 45%)",
          }}
        >
          <ImageListItem
            key={map.uuid}
            sx={{
              borderRadius: "7px",
            }}
          >
            <img
              src={`${map.splash}?w=161&fit=crop&auto=format`}
              alt={map.displayName}
              style={{ borderRadius: "7px" }}
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
    </>
  );
};
export default Maps;
