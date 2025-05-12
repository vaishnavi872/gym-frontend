// src/admin/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/blogs">Blog</Link></li>
          <li><Link to="/admin/services">Services</Link></li>
          <li><Link to="/admin/classes">Classes</Link></li>
        <li>  <Link to="/admin/about">About</Link></li>

          {/* More links to Users, Trainers, etc. later */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
