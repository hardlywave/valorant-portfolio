import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

interface IProps {
  loading: boolean;
}

const Loader = ({ loading }: IProps) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme: any) => theme.zIndex.drawer + 1,
      }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
