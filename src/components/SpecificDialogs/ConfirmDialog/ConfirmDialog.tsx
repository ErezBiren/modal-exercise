import Dialog, { DialogProps } from "../../Dialog/Dialog";

export interface ConfirmDialogProps extends DialogProps {
  cancelCallback: () => void;
  confirmCallback: () => void;
  contentText: string;
  showCancelButton: boolean;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const {
    cancelCallback,
    confirmCallback,
    contentText,
    showCancelButton,
    ...otherProps
  } = props;

  const buttonStyles = {
    color: "white",
    border: 0,
    boxshadow: "none",
    background: "purple",
    "&:hover": { background: "green" },
  };

  let confirmActions = [
    {
      id: "1",
      name: "Confirm",
      callback: confirmCallback,
      style: buttonStyles,
    },
  ];

  if (showCancelButton) {
    confirmActions = [
      {
        id: "2",
        name: "Cancel",
        callback: cancelCallback,
        style: buttonStyles,
      },
      ...confirmActions,
    ];
  }

  return (
    <Dialog actions={confirmActions} {...otherProps}>
      <div>{contentText}</div>
    </Dialog>
  );
};

export default ConfirmDialog;
