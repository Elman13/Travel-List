import { createPortal } from "react-dom";

export default function Modal({ message, onConfirm, onCancel, isVisible }) {
  if (!isVisible) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-confirm">
            Ok
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
