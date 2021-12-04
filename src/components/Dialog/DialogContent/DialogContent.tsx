import "./DialogContent.css";

export interface DialogContentProps {
  children: any;
}

const DialogContent = (props: DialogContentProps) => {
  const { children } = props;
  return <div className="dialogContent">{children}</div>;
};

export default DialogContent;
