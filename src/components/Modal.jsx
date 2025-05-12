import React from 'react';
import '../styles/Modal.css';

const Modal = ({ title, description, rating, reviews, onClose, onConfirm, showActions }) => {
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {'★'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
        <span className="rating-value"> ({rate})</span>
      </>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>{title}</h3>
        <p>{description}</p>

        {rating !== undefined && <div className="rating">{renderStars(rating)}</div>}

        {reviews && (
          <div className="reviews">
            <h4>User Reviews</h4>
            {reviews.map((r, idx) => (
              <p key={idx}><strong>{r.user}</strong>: {r.comment}</p>
            ))}
          </div>
        )}

        {showActions && (
          <div className="modal-actions">
            <button className="btn cancel" onClick={onClose}>Cancel</button>
            <button className="btn confirm" onClick={onConfirm}>Confirm</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
