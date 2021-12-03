import "./DialogActions.css";

export interface DialogAction {
  id: string;
  name: string;
  callback: () => {};
}

export interface DialgoActionsProps {
  actions: DialogAction[];
}

const DialogActions = (props: DialgoActionsProps) => {
  const { actions } = props;

  return (
    <div className="dialogActions-container">
      {actions &&
        actions?.map((action) => (
          <button key={action.id} onClick={action.callback}>
            {action.name}
          </button>
        ))}
    </div>
  );
};

export default DialogActions;
