import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useWeapon from "../requests/getWeapon";
import Weapons from "../components/tsx/Weapons";
import Loader from "../components/tsx/mainComponents/Loader";

import ImageList from "@mui/material/ImageList";
import { IWeapon } from "../interfaces/IWeapon";
import Button from "@mui/material/Button";

const WeaponsPage = () => {
  const { loading, weapons } = useWeapon();
  const [weaponsList, setWeaponsList] = useState<IWeapon[]>([]);
  const [skinSwapper, setSkinSwapper] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const isSmallWindow = useMediaQuery({ query: `(max-width: 600px)` });
  const isMediumWindow = useMediaQuery({ query: `(max-width: 800px)` });

  const windowSize = () => (isSmallWindow ? 1 : isMediumWindow ? 2 : 3);

  const sortByHandler = () => {
    sortBy === "category" ? setSortBy("name") : setSortBy("category");
  };

  function sortByCategory() {
    return [...weapons].sort((el1, el2) =>
      el1.category.split("::")[1] === el2.category.split("::")[1] ? 1 : -1
    );
  }

  function sortByName() {
    return [...weapons].sort((el1, el2) =>
      el1.displayName.localeCompare(el2.displayName)
    );
  }

  const swapTheSkin = () => setSkinSwapper(!skinSwapper);

  useEffect(() => {
    setWeaponsList(weapons);
    if (sortBy === "category") {
      setWeaponsList(sortByCategory());
    } else if (sortBy === "name") {
      setWeaponsList(sortByName());
    }
  }, [weapons, sortBy]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <Button
        onClick={() => sortByHandler()}
        className="sortAgentsButton"
        variant="outlined"
        sx={{ m: "15px 0 0 15px", transform: "scale(0.98)" }}
      >
        Sort by {sortBy}
      </Button>
      <Button
        onClick={() => swapTheSkin()}
        className="sortAgentsButton"
        variant="outlined"
        sx={{ m: "15px 0 0 15px", transform: "scale(0.98)" }}
      >
        Change Skins
      </Button>
      <ImageList
        cols={windowSize()}
        style={{ overflowY: "auto", padding: "0 15px" }}
        gap={15}
      >
        {weaponsList.map((weapon, index) => (
          <Weapons key={index} weapon={weapon} />
        ))}
      </ImageList>
    </>
  );
};

export default WeaponsPage;
