import React from "react";
import Modal from "../Modal/Modal";

const ConfirmModal = (props) => {
  const { children, ...other } = props;

  return <Modal {...other}>{children}</Modal>;
};

export default ConfirmModal;
