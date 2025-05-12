// blogService.js
const BLOGS_KEY = 'blogs';

export const getBlogs = () => {
  const data = localStorage.getItem(BLOGS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveBlog = (newBlog) => {
  const blogs = getBlogs();
  const id = Date.now(); // simple unique ID
  blogs.push({ ...newBlog, id });
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

export const updateBlog = (id, updatedBlog) => {
  const blogs = getBlogs().map(blog =>
    blog.id === id ? { ...updatedBlog, id } : blog
  );
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

export const deleteBlog = (id) => {
  const blogs = getBlogs().filter(blog => blog.id !== id);
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

export const getBlogById = (id) => {
  return getBlogs().find(blog => blog.id === id);
};
