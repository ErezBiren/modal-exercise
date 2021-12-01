import React from "react";
import ReactDom from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import "./Modal.css";

const modal = (props) => {
  const {
    open,
    children,
    handleBackdropClick,
    hideBackdrop = false,
    BackdropComponent = <Backdrop {...props} />,
  } = props;

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {!hideBackdrop && BackdropComponent ? BackdropComponent : null}
      <div className="modal-root">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default modal;
