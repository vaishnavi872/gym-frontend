import React, { useState } from 'react';
import '../styles/LoginPopup.css';

const LoginPop = ({ onClose, showSignup }) => {
  const [isLogin, setIsLogin] = useState(!showSignup);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState('user'); // default to user


  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({}); // Clear errors when toggling forms
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = true;
    if (!password) newErrors.password = true;
    if (!isLogin && !name) newErrors.name = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      if (isLogin) {
        if (role === "admin") {
          // Check hardcoded admin credentials
          if (email === "admin@example.com" && password === "admin123") {
            localStorage.setItem("userRole", "admin");
            window.location.href = "/admin/dashboard";
          } else {
            alert("Invalid admin credentials");
          }
        } else {
          // User login
          localStorage.setItem("userRole", "user");
          window.location.href = "/";
        }
      } else {
        // Signup — everyone is saved as user
        localStorage.setItem("userRole", role);
        alert("Account created!");
        onClose();
      }
    }
  };
  

  return (
    <div className="pop-overlay">
      <div className="pop-container">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2>FITNESS STUDIO</h2>
        <h3>{isLogin ? 'Login' : 'Sign Up'}</h3>
        
        <form onSubmit={handleSubmit} noValidate>
          {!isLogin && (
            <div className="form-group">
              <label>Your name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className={errors.name ? 'error' : ''}
              />
            </div>
          )}
          <div className="form-group">
  <label>Role</label>
  <select value={role} onChange={(e) => setRole(e.target.value)}>
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={errors.email ? 'error' : ''}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={errors.password ? 'error' : ''}
            />
          </div>
          

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create account'}
          </button>
        </form>
        {/* Add Checkbox here */}
  <div className="checkbox-group">
    <input type="checkbox" id="agree" required />
    <label htmlFor="agree">I agree to the terms and conditions</label>
  </div>
        
        
        <div className="form-footer">
         
          <p>
            {isLogin ? (
              <>Create a new account? <span onClick={toggleForm}>Click here</span></>
            ) : (
              <>Already have an account? <span onClick={toggleForm}>Login here</span></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPop;