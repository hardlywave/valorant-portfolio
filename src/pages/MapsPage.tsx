import React from "react";
import "../components/scss/Catalog.scss";

import useMaps from "../requests/getMaps";
import Maps from "../components/tsx/Maps";
import Loader from "../components/tsx/mainComponents/Loader";
import LoadError from "../components/tsx/mainComponents/LoadError";

const MapsPage = () => {
  const { loading, error, maps } = useMaps();

  return (
    <main className="page">
      <div className="page-head">
        <div>
          <h1 className="page-title">Maps</h1>
          <p className="page-subtitle">
            Select a map to see its coordinates and minimap.
          </p>
        </div>
      </div>
      <Loader loading={loading} />
      {error && <LoadError />}
      <div className="catalog-grid">
        {maps.map((map) => (
          <Maps key={map.uuid} map={map} />
        ))}
      </div>
    </main>
  );
};

export default MapsPage;
