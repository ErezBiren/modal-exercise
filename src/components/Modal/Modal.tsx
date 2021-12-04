import ReactDom from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import "./Modal.css";

const modal = (props: any) => {
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
