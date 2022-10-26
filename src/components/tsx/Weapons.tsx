import { IWeapon } from "../../interfaces/models";
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
        boxShadow: "-2px 3px 10px 6px rgb(30 30 30 / 40%)",
        transform: "scale(0.96)",
        "&:hover": {
          transform: "scale(0.98)",
          zIndex: 1,
        },
      }}
    >
      <ListItemButton
        onClick={() => alert("Sorry, page is not ready")}
        sx={{
          height: 180,
          width: "auto",
          borderRadius: "7px",
          backgroundColor: "lightgrey",
          justifyContent: "center",
          boxShadow: "inset 1px 3px 30px 10px rgb(30 30 30 / 45%)",
          "&:hover": {
            backgroundColor: "lightgrey",
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
