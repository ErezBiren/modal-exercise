import React from "react";
import ReactDom from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import "./Modal.css";

const modal = (props) => {
  const { open, children, handleBackdropClick, hideBackdrop = false } = props;

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {!hideBackdrop ? <Backdrop {...props} /> : null}

      <div className="modal-root">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default modal;
