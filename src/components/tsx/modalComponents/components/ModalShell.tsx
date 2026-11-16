import React, { ReactNode, useEffect } from "react";
import "../../../scss/Modal.scss";
import ModalCloseButton from "./ModalCloseButton";

interface ModalShellProps {
  label: string;
  setClose: (value: boolean) => void;
  children: ReactNode;
}

// Backdrop, Escape / outside-click closing and page scroll lock for all modals.
const ModalShell = ({ label, setClose, children }: ModalShellProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setClose(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setClose]);

  return (
    <div className="modal-container" onClick={() => setClose(false)}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <ModalCloseButton setClose={setClose} />
      </div>
    </div>
  );
};

export default ModalShell;
