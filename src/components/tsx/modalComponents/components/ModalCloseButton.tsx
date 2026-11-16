import React from "react";

interface CloseButtonProps {
  setClose: (value: boolean) => void;
}

const ModalCloseButton = ({ setClose }: CloseButtonProps) => (
  <button
    className="modal-close"
    aria-label="Close"
    onClick={() => setClose(false)}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M2 2l14 14M16 2L2 16"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  </button>
);

export default ModalCloseButton;
