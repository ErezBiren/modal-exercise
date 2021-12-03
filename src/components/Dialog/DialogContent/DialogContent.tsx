import "./DialogContent.css";

const DialogContent = (props: any) => {
  const { children } = props;
  return <div className="dialogContent">{children}</div>;
};

export default DialogContent;
