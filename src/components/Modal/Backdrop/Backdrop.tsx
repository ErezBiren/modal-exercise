import { CSSProperties, useMemo } from "react";
import "./Backdrop.css";

export interface BackdropProps {
  handleClose?: () => void;
  color?: string;
}

const Backdrop = (props: BackdropProps) => {
  const { handleClose, color = "rgba(0, 0, 0, 0.7)" } = props;

  const backdropStyle = useMemo(() => {
    return {
      background: color,
    } as CSSProperties;
  }, [props.color]);

  return (
    <div
      title="backdrop-root"
      style={backdropStyle}
      className="backdrop-root"
      onClick={handleClose}
    />
  );
};

export default Backdrop;
