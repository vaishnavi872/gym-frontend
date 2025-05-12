import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import { getBlogs, deleteBlog } from './blogService';

const initialBlogs = [
  {
    id: 1,
    title: '5 Best Yoga Poses for Flexibility',
    author: 'Admin',
    date: '2025-05-09',
    tags: ['yoga', 'flexibility'],
    content: 'This is a short intro about yoga poses...',
    image: 'https://source.unsplash.com/featured/?yoga'
  },
  {
    id: 2,
    title: 'How to Build a Workout Routine',
    author: 'Coach Lisa',
    date: '2025-05-08',
    tags: ['workout', 'routine'],
    content: 'Planning your workouts is key to consistency...',
    image: 'https://source.unsplash.com/featured/?fitness'
  }
];

const BlogList = () => {
  const [blogs, setBlogs] = useState(initialBlogs);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteBlog(id);
      setBlogs(getBlogs()); // Refresh list
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2 className="blog-title">Blog Posts</h2>
        <Link to="/admin/blogs/add" className="add-blog-button">
          Add New Post
        </Link>
      </div>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-post-title">{blog.title}</h3>
            <p className="blog-meta">By {blog.author} on {blog.date}</p>
            <p className="blog-snippet">{blog.content.slice(0, 80)}...</p>
            <div className="blog-actions">
              <Link to={`/admin/blogs/edit/${blog.id}`}>
                <button className="edit-button">Edit</button>
              </Link>
              <button onClick={() => handleDelete(blog.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
