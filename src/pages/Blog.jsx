import React from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.css';
import Layout from '../components/Layout';
import { blogs } from '../data/data.jsx';

const Blog = () => {

  return (
    <Layout>
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Blog;
