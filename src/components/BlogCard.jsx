import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Blog.css';

const BlogCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="read-more" onClick={handleReadMore}>Read More</button>
    </div>
  );
};

export default BlogCard;
