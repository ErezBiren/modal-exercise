import { FC } from "react";
import "./DialogContent.css";

export interface DialogContentProps {
  children: any;
}

const DialogContent: React.FC<DialogContentProps> = (props) => {
  const { children } = props;
  return <div className="dialogContent">{children}</div>;
};

export default DialogContent;
