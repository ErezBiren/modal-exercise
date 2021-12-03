import Modal from "../Modal/Modal";
import DialogActions from "./DialogActions/DialogActions";
import DialogContent from "./DialogContent/DialogContent";
import DialogHeader from "./DialogHeader/DialogHeader";

const Dialog = (props: any) => {
  const { actions } = props;
  return (
    <div>
      <Modal {...props}>
        <DialogHeader />
        <DialogContent />
        <DialogActions actions={actions} />
      </Modal>
    </div>
  );
};

export default Dialog;
