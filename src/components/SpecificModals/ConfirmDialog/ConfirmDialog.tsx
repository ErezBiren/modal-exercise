import { useState } from "react";
import Dialog from "../../Dialog/Dialog";
import DialogAction from "./../../Dialog/DialogActions/DialogActions";

const ConfirmDialog = (props: any) => {
  const { children, confirmCallback, cancelCallback } = props;

  const confirmActions = [
    {
      id: "1",
      name: "Confirm",
      callback: confirmCallback,
    },
    {
      id: "2",
      name: "Cancel",
      callback: cancelCallback,
    },
  ];

  return (
    <Dialog actions={confirmActions} {...props}>
      {children}
    </Dialog>
  );
};

export default ConfirmDialog;
