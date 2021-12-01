import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const modal = ({ visible, children }) => {
  if (!visible) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal__overlay" />
      <div className="modal__root">{children}</div>
    </>,
    document.getElementById("portal")
  );
};

export default modal;
