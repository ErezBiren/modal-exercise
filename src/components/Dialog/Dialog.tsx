import Modal, { ModalProps } from "../Modal/Modal";
import DialogFooter, { DialgoActionsProps } from "./DialogFooter/DialogFooter";
import DialogContent from "./DialogContent/DialogContent";
import DialogHeader, { DialogHeaderProps } from "./DialogHeader/DialogHeader";
import "./Dialog.css";
import { ReactElement } from "react";

export interface DialogProps
  extends ModalProps,
    DialgoActionsProps,
    DialogHeaderProps {
  dialogHeader?: ReactElement;
  dialogContent?: ReactElement;
  dialogFooter?: ReactElement;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    children,
    dialogHeader: dialogHeaderComponent,
    dialogContent: dialogContentComponent,
    dialogFooter: dialogFooterComponent,
    ...otherProps
  } = props;

  const dialogHeader = dialogHeaderComponent ? (
    dialogHeaderComponent
  ) : (
    <DialogHeader {...otherProps} />
  );

  const dialogContent = dialogContentComponent ? (
    dialogContentComponent
  ) : (
    <DialogContent {...otherProps}>{children}</DialogContent>
  );

  const dialogFooter = dialogFooterComponent ? (
    dialogFooterComponent
  ) : (
    <DialogFooter {...otherProps} />
  );

  return (
    <Modal {...otherProps}>
      <div className="dialog-container">
        <div className="dialog-main">
          {dialogHeader}
          {dialogContent}
          {dialogFooter}
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
