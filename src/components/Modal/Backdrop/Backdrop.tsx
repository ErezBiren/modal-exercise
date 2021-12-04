import "./Backdrop.css";

export interface BackdropProps {
  handleClose?: () => void;
}

const Backdrop = (props: BackdropProps) => {
  const { handleClose } = props;

  return <div className="backdrop-root" onClick={handleClose} />;
};

export default Backdrop;
