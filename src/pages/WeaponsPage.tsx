import React from "react";
import { useMediaQuery } from "react-responsive";
import useWeapon from "../requests/getWeapon";
import Weapons from "../components/tsx/Weapons";
import Loader from "../components/tsx/mainComponents/Loader";

import ImageList from "@mui/material/ImageList";

const WeaponsPage = () => {
  const { loading, weapons } = useWeapon();

  const isSmallWindow = useMediaQuery({ query: `(max-width: 600px)` });
  const isMediumWindow = useMediaQuery({ query: `(max-width: 800px)` });

  const windowSize = () => (isSmallWindow ? 1 : isMediumWindow ? 2 : 3);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <ImageList
        cols={windowSize()}
        style={{ overflowY: "auto", padding: "0 15px" }}
        gap={15}
      >
        {weapons
          .sort((weapon1, weapon2) =>
            weapon1.category.split("::")[1] === weapon2.category.split("::")[1]
              ? 1
              : -1
          )
          .map((weapon, index) => (
            <Weapons key={index} weapon={weapon} />
          ))}
      </ImageList>
    </>
  );
};

export default WeaponsPage;
