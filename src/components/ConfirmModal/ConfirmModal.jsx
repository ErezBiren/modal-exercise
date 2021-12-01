import React from "react";
import Modal from "../Modal/Modal";

const ConfirmModal = ({ children, visible }) => {
  return <Modal visible={visible}>{children}</Modal>;
};

export default ConfirmModal;
