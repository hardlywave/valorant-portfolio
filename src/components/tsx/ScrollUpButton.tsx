import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="label"
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        scrollToTop();
      }}
      style={{
        display: visible ? "inline" : "none",
        position: "fixed",
        zIndex: 1000,
        right: 20,
        bottom: 20,
      }}
    >
      <input hidden accept="image/*" type="file" />
      <ArrowCircleUp sx={{ fontSize: 60 }} />
    </IconButton>
  );
};

export default ScrollUpButton;
