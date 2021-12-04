import ReactDom from "react-dom";
import Backdrop, { BackdropProps } from "./Backdrop/Backdrop";
import "./Modal.css";

export interface ModalProps extends BackdropProps {
  hideBackdrop?: boolean;
  open: boolean;
}

const modal: React.FC<ModalProps> = (props) => {
  const { open, children, hideBackdrop = false, ...otherProps } = props;

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {!hideBackdrop ? <Backdrop {...otherProps} /> : null}
      <div className="modal-root">{children}</div>
    </>,
    document.getElementById("portal")!
  );
};

export default modal;
