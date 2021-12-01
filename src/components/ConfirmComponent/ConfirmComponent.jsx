import React from "react";
import "./ConfirmComponent.css";

const ConfirmComponent = (props) => {
  const { handleConfirm } = props;

  return (
    <>
      <div className="confirm-component-card">
        <div className="confirm-component-header">
          <h1>42</h1>
        </div>
        <div className="confirm-component-content">
          <h4>What do you get when you multiply 6 by 7?</h4>
        </div>
        <div>
          <button className="confirm-component-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmComponent;
