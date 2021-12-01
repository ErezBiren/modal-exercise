import React from "react";
import "./ConfirmComponent.css";

const ConfirmComponent = (props) => {
  const { handleConfirm, handleClose, showCancelButton } = props;

  return (
    <>
      <div className="confirm-component-card">
        <div className="confirm-component-toolbox">
          <button
            onClick={handleClose}
            className="confirm-component-close-button"
          >
            X
          </button>
        </div>

        <div className="confirm-component-header">
          <h1>42</h1>
        </div>
        <div className="confirm-component-content">
          <h4>What do you get when you multiply 6 by 7?</h4>
        </div>
        <div className="confirm-component-buttons">
          {showCancelButton && (
            <button
              className="confirm-component-button"
              onClick={handleConfirm}
            >
              Cancel
            </button>
          )}
          <button className="confirm-component-button" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmComponent;
