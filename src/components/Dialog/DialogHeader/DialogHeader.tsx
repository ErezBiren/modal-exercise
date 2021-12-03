import "./DialogHeader.css";

const DialogHeader = (props: any) => {
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
