import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  const { children, handleClose, open, ...other } = props;

  return <div className="backdrop-root" {...other} onClick={handleClose} />;
};

export default Backdrop;
