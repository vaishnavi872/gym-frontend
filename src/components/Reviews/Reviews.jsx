import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import "./Review.css";


const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]); // Add new review to the top
  };

  return (
    <div className="reviews-page">
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>User Reviews</h2>
      <ReviewForm onAddReview={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Reviews;
