import ConfirmModal from "./components/ConfirmModal/ConfirmModal";
import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>open modal</button>

      <ConfirmModal visible={isVisible}>hello world</ConfirmModal>
    </div>
  );
}

export default App;
