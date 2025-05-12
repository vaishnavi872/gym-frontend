import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/Blog.css';
import { blogData } from '../data/data.jsx';


const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
