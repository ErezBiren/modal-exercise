import ConfirmComponent from "./components/ConfirmComponent/ConfirmComponent";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpenConfirm(!isOpenConfirm)}>Open Confirm</button>
      <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>Open Sidebar</button>

      <Modal
        open={isOpenConfirm}
        hideBackdrop={false}
        handleClose={() => setIsOpenConfirm(false)}
      >
        <ConfirmComponent handleConfirm={() => setIsOpenConfirm(false)} />
      </Modal>

      <Modal
        open={isOpenSidebar}
        hideBackdrop={true}
        handleClose={() => setIsOpenSidebar(false)}
      >
        <Sidebar />
      </Modal>
    </div>
  );
}

export default App;
