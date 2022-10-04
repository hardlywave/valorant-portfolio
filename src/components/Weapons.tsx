import { IWeapon } from "../models";
import ListItemButton from "@mui/material/ListItemButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

interface WeaponsProps {
  weapon: IWeapon;
}

const Weapons = ({ weapon }: WeaponsProps) => {
  return (
    <ImageListItem
      sx={{
        height: 180,
        borderRadius: "7px",
      }}
    >
      <ListItemButton
        onClick={() => alert(weapon.uuid)}
        sx={{
          height: 180,
          width: "auto",
          borderRadius: "7px",
          backgroundColor: "lightgrey",
          transform: "scale(0.98)",
          justifyContent: "center",
          "&:hover": {
            transform: "scale(1)",
            backgroundColor: "lightgrey",
            zIndex: 1,
          },
        }}
      >
        <ImageListItem>
          <img
            style={{ maxHeight: 150 }}
            src={`${weapon.displayIcon}?w=248&fit=crop&auto=format`}
            alt={weapon.displayName}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItemBar
          sx={{
            fontWeight: "Bold",
            position: "absolute",
            borderRadius: "7px",
          }}
          title={weapon.displayName}
          subtitle={weapon.category.split("::")[1]}
          actionIcon={
            <img
              alt={`${weapon.displayName}`}
              style={{
                height: 30,
                paddingRight: 16,
              }}
              srcSet={weapon.killStreamIcon}
            />
          }
        />
      </ListItemButton>
    </ImageListItem>
  );
};
export default Weapons;
