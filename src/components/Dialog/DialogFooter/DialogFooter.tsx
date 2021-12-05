import { CSSProperties } from "react";
import "./DialogFooter.css";

export interface DialogAction {
  id: string;
  name: string;
  callback: () => void;
  style?: CSSProperties | undefined;
}

export interface DialgoActionsProps {
  actions?: DialogAction[];
}

const DialogFooter = (props: DialgoActionsProps) => {
  const { actions } = props;

  return (
    <div className="dialogFooter-container">
      {actions &&
        actions?.map((action) => (
          <button
            key={action.id}
            onClick={action.callback}
            style={action.style}
          >
            {action.name}
          </button>
        ))}
    </div>
  );
};

export default DialogFooter;
