import { CSSProperties, useMemo } from "react";
import ReactDom from "react-dom";
import useRoot from "../../hooks/useRoot";
import Backdrop, { BackdropProps } from "./Backdrop/Backdrop";
import "./Modal.css";

export interface ModalProps extends BackdropProps {
  hideBackdrop?: boolean;
  open: boolean;
  position?: keyof typeof OpenPositions;
}

export const OpenPositions = {
  center: {
    top: "50%",
    left: "50%",
    translate: "translate(-50%,-50%)",
    height: "auto",
    width: "auto",
  },
  left: {
    top: "0",
    left: "0",
    translate: "translate(0,0)",
    height: "100vh",
    width: "20vw",
  },
  right: {
    top: "0",
    left: "100%",
    translate: "translate(-100%,0)",
    height: "100vh",
    width: "20vw",
  },
  top: {
    top: "0",
    left: "0",
    translate: "translate(0,0)",
    height: "10vh",
    width: "100vw",
  },
  bottom: {
    top: "100%",
    left: "0",
    translate: "translate(0,-100%)",
    height: "10vh",
    width: "100vw",
  },
};

const Modal: React.FC<ModalProps> = (props) => {
  const {
    open,
    position = "center",
    children,
    hideBackdrop = false,
    ...otherProps
  } = props;

  const modalRoot = useRoot("dialog-root");

  const modalRootStyle = useMemo(() => {
    return {
      top: OpenPositions[position].top,
      left: OpenPositions[position].left,
      transform: OpenPositions[position].translate,
      height: OpenPositions[position].height,
      width: OpenPositions[position].width,
    } as CSSProperties;
  }, [props.position]);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {!hideBackdrop ? <Backdrop {...otherProps} /> : null}
      <div style={modalRootStyle} className="modal-root">
        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
