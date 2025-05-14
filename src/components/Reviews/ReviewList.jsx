import React from "react";
import "./Review.css";
import defaultAvatar from '../../assets/default-avatar.png';

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p className="no-reviews">No reviews yet. Be the first to review!</p>;
  }

  return (
  <div className="review-list">
    <h3>What Our Members Say</h3>
    {reviews.map((review) => (
      <div className="review-item" key={review.id}>
        <div className="review-header">
          <img
            src={review.image || defaultAvatar}
            alt="User"
            style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }}
          />
          <div>
            <h4>{review.name}</h4>
            <span className="review-date">{review.date}</span>
          </div>
        </div>
        <div className="review-rating">
          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
        </div>
        <p className="review-comment">{review.comment}</p>
      </div>
    ))}
  </div>
)
};


export default ReviewList;
