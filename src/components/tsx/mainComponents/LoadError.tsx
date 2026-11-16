import React from "react";

const LoadError = () => (
  <div className="status" role="alert">
    <strong>Couldn't load the data</strong>
    The Valorant API didn't respond. Check your connection and reload the page.
  </div>
);

export default LoadError;
