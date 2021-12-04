import Modal, { ModalProps } from "../Modal/Modal";
import DialogFooter, { DialgoActionsProps } from "./DialogFooter/DialogFooter";
import DialogContent from "./DialogContent/DialogContent";
import DialogHeader, { DialogHeaderProps } from "./DialogHeader/DialogHeader";
import "./Dialog.css";

export interface DialogProps
  extends ModalProps,
    DialgoActionsProps,
    DialogHeaderProps {}

const Dialog: React.FC<DialogProps> = (props) => {
  const { children, actions, ...otherProps } = props;
  return (
    <Modal {...otherProps}>
      <div className="dialog-container">
        <div className="dialog-main">
          <DialogHeader {...otherProps} />
          <DialogContent {...otherProps}>{children}</DialogContent>
          <DialogFooter actions={actions} />
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
