import { IWeapon } from "../../models";
import ListItemButton from "@mui/material/ListItemButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

interface WeaponsProps {
  weapon: IWeapon;
}

const Weapons = ({ weapon }: WeaponsProps) => {
  const RandomFunction = () => Math.floor(Math.random() * 5);
  let weaponDisplayIcon;

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
          transform: "scale(0.96)",
          justifyContent: "center",
          boxShadow: "-2px 3px 10px 6px rgb(30 30 30 / 40%)",
          "&:hover": {
            transform: "scale(0.98)",
            backgroundColor: "lightgrey",
            zIndex: 1,
          },
        }}
      >
        <ImageListItem>
          <img
            style={{ maxHeight: 150 }}
            src={`${
              weapon.skins[(weaponDisplayIcon = RandomFunction())].displayIcon
                ? weapon.skins[weaponDisplayIcon].displayIcon
                : weapon.displayIcon
            }?w=248&fit=crop&auto=format`}
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
