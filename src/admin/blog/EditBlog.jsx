import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBlog.css';
import { getBlogById, updateBlog } from './blogService';

// Dummy blog data for edit
const dummyBlogs = [
  {
    id: 1,
    title: '5 Best Yoga Poses for Flexibility',
    author: 'Admin',
    date: '2025-05-09',
    tags: 'yoga, flexibility',
    content: 'This is a short intro about yoga poses...',
    image: 'https://source.unsplash.com/featured/?yoga'
  },
  {
    id: 2,
    title: 'How to Build a Workout Routine',
    author: 'Coach Lisa',
    date: '2025-05-08',
    tags: 'workout, routine',
    content: 'Planning your workouts is key to consistency...',
    image: 'https://source.unsplash.com/featured/?fitness'
  }
];

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id);
  const [blog, setBlog] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const existing = getBlogById(blogId);
    if (existing) setBlog(existing);
  }, [blogId]);

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
      updateBlog(blogId, blog);
      navigate('/admin/blogs');
    }
  };
  if (!blog) return <div className="edit-loading">Loading blog...</div>;

  return (
    <div className="edit-container">
      <h2 className="edit-title">Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-field">
          <label>Title</label>
          <input name="title" value={blog.title} onChange={handleChange} />
          {errors.title && <p className="edit-error">{errors.title}</p>}
        </div>

        <div className="edit-field">
          <label>Author</label>
          <input name="author" value={blog.author} onChange={handleChange} />
          {errors.author && <p className="edit-error">{errors.author}</p>}
        </div>

        <div className="edit-field">
          <label>Tags</label>
          <input name="tags" value={blog.tags} onChange={handleChange} />
        </div>

        <div className="edit-field">
          <label>Image URL</label>
          <input name="image" value={blog.image} onChange={handleChange} />
          {errors.image && <p className="edit-error">{errors.image}</p>}
        </div>

        <div className="edit-field">
          <label>Content</label>
          <textarea name="content" rows="6" value={blog.content} onChange={handleChange} />
          {errors.content && <p className="edit-error">{errors.content}</p>}
        </div>

        <button type="submit" className="edit-submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
