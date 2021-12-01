import ConfirmModal from "./components/ConfirmModal/ConfirmModal";
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>open modal</button>

      <ConfirmModal
        open={isOpen}
        hideBackdrop={false}
        handleClose={() => setIsOpen(false)}
      >
        hello world
      </ConfirmModal>
    </div>
  );
}

export default App;
