import Dialog from "../../Dialog/Dialog";

const ConfirmDialog = (props: any) => {
  const { contentText, confirmCallback, showCancelButton, cancelCallback } =
    props;

  let confirmActions = [
    {
      id: "1",
      name: "Confirm",
      callback: confirmCallback,
    },
  ];
  
  if (showCancelButton) {
    confirmActions = [
      {
        id: "2",
        name: "Cancel",
        callback: cancelCallback,
      },
      ...confirmActions,
    ];
  }

  return (
    <Dialog actions={confirmActions} {...props}>
      <div>{contentText}</div>
    </Dialog>
  );
};

export default ConfirmDialog;
