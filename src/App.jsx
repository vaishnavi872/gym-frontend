import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './HomePage';
import Membership from './components/Membership';
import EquipmentPage from './pages/EquipmentPage';
import NutritionPage from './pages/NutritionPage';
import TrainingPlanPage from './pages/TrainingPlanPage';
import CustomPlanPage from './pages/CustomPlanPage';
import YogaPage from './pages/YogaPage';
import Cardio from './pages/Cardio';
import Bodybuilding from './pages/Bodybuilding';
import Blog from './pages/Blog';
import SignupPopup from './components/SignupPopup';
import Services from './pages/Services'; 
import About from './pages/About';
import Classes from './pages/Classes';
import Payment from './pages/Payment';
import BlogDetails from './pages/BlogDetails';
import Reviews from "./components/Reviews/Reviews";


// Admin Panel
import AdminApp from './admin/AdminApp';

function App() {
  return (

    <Routes>
     {/* Main Website Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/equipment" element={<EquipmentPage />} />
      <Route path="/nutrition" element={<NutritionPage />} />
      <Route path="/training-plan" element={<TrainingPlanPage />} />
      <Route path="/custom-plan" element={<CustomPlanPage />} />
      <Route path="/bodybuilding" element={<Bodybuilding />} />
      <Route path="/signup" element={<SignupPopup />} />
      <Route path="/yoga" element={<YogaPage />} />
      <Route path="/cardio" element={<Cardio />} />
      <Route path="/our-blog" element={<Blog />} />

      <Route path="/blog/:id" element={<BlogDetails />} />     
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/services" element={<Services />} />      
      <Route path="/payment" element={<Payment />} />           
       <Route path="/reviews" element={<Reviews />} />
       {/* Admin Panel Routes */}
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>

  );
}

export default App;