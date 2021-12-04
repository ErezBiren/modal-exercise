import "./DialogHeader.css";

export interface DialogHeaderProps {
  handleClose?: () => void;
  title: string;
}

const DialogHeader = (props: DialogHeaderProps) => {
  const { handleClose, title } = props;

  return (
    <div className="dialogHeader-root">
      <h2>{title}</h2>
      <button onClick={handleClose} className="dialogHeader-closeButton">
        X
      </button>
    </div>
  );
};

export default DialogHeader;
