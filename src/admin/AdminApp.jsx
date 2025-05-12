// src/admin/AdminApp.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/Dashboard';
import './admin.css';
import Users from './pages/Users';
import BlogList from './blog/BlogList';
import AddBlog from './blog/AddBlog';
import EditBlog from './blog/EditBlog';
import ServiceList from './services/ServiceList';
import AddService from './services/AddService';
import EditService from './services/EditService';
import ClassesList from './classes/ClassesList';
import AddClass from './classes/AddClass';
import EditClass from './classes/EditClass';
import About from "./about/About";
const AdminApp = () => {
  return (

    <div className="admin-panel">
      <Sidebar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="blogs/add" element={<AddBlog />} />
          <Route path="blogs/edit/:id" element={<EditBlog />} />
          <Route path="services" element={<ServiceList />} />
          <Route path="services/add" element={<AddService />} />
          <Route path="services/edit/:id" element={<EditService />} />
          <Route path="classes" element={<ClassesList />} />
          <Route path="classes/add" element={<AddClass />} />
          <Route path="classes/edit/:id" element={<EditClass />} />
          <Route path="/About" element={<About />} />

          {/* More admin routes will go here later */}
        </Routes>
      </div>
    </div>

  );
};

export default AdminApp;
