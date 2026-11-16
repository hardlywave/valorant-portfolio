import React from "react";

interface IProps {
  loading: boolean;
}

const Loader = ({ loading }: IProps) =>
  loading ? <div className="loader" role="status" aria-label="Loading" /> : null;

export default Loader;
