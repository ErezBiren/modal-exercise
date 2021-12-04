import Modal from "../Modal/Modal";
import DialogFooter from "./DialogFooter/DialogFooter";
import DialogContent from "./DialogContent/DialogContent";
import DialogHeader from "./DialogHeader/DialogHeader";
import "./Dialog.css";

const Dialog = (props: any) => {
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
