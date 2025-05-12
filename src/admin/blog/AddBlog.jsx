import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addBlog.css';
import { saveBlog } from './blogService'; 

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    author: '',
    date: new Date().toISOString().slice(0, 10),
    tags: '',
    content: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!blog.title.trim()) newErrors.title = 'Title is required';
    if (!blog.author.trim()) newErrors.author = 'Author is required';
    if (!blog.content.trim()) newErrors.content = 'Content is required';
    if (!blog.image.trim()) newErrors.image = 'Image URL is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      saveBlog(blog); // Save to localStorage
      navigate('/admin/blogs');
    }
  };

  return (
    <div className="add-blog-container">
      <h2 className="add-blog-title">Add New Blog Post</h2>
      <form onSubmit={handleSubmit} className="add-blog-form">
        <div>
          <label>Title</label>
          <input
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="add-blog-input"
          />
          {errors.title && <p className="add-blog-error">{errors.title}</p>}
        </div>

        <div>
          <label>Author</label>
          <input
            name="author"
            value={blog.author}
            onChange={handleChange}
            className="add-blog-input"
          />
          {errors.author && <p className="add-blog-error">{errors.author}</p>}
        </div>

        <div>
          <label>Tags (comma-separated)</label>
          <input
            name="tags"
            value={blog.tags}
            onChange={handleChange}
            className="add-blog-input"
          />
        </div>

        <div>
          <label>Image URL</label>
          <input
            name="image"
            value={blog.image}
            onChange={handleChange}
            className="add-blog-input"
          />
          {errors.image && <p className="add-blog-error">{errors.image}</p>}
        </div>

        <div>
          <label>Content</label>
          <textarea
            name="content"
            rows="6"
            value={blog.content}
            onChange={handleChange}
            className="add-blog-textarea"
          />
          {errors.content && <p className="add-blog-error">{errors.content}</p>}
        </div>

        <button type="submit" className="add-blog-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
