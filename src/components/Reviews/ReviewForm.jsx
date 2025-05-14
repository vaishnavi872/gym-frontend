import React, { useState } from "react";
import "./Review.css";

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      id: Date.now(),
        image: image ? URL.createObjectURL(image) : null,
      name,
      rating,
      comment,    
      date: new Date().toLocaleDateString(),
    };

    onAddReview(newReview);

    // Clear form
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <input
  type="file"
  accept="image/*"
  onChange={(e) => setImage(e.target.files[0])}
/>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star{star > 1 && "s"}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
