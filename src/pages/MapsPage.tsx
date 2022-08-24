import React from "react";
import { useMediaQuery } from "react-responsive";

import useMaps from "../requests/getMaps";
import Maps from "../components/Maps";
import Loader from "../components/Loader";

import ImageList from "@mui/material/ImageList";

const MapsPage = () => {
  const { loading, maps } = useMaps();

  const isSmallWindow = useMediaQuery({ query: `(max-width: 450px)` });
  const isMediumWindow = useMediaQuery({ query: `(max-width: 800px)` });

  const windowSize = () => (isSmallWindow ? 1 : isMediumWindow ? 2 : 3);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <ImageList cols={windowSize()} style={{ overflowY: "auto" }}>
        {maps.map((map, index) => (
          <Maps key={index} map={map} />
        ))}
      </ImageList>
    </>
  );
};

export default MapsPage;
