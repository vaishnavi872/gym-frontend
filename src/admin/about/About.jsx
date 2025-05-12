import React, { useState } from 'react';
import './about.css';
import gymImage from '../assets/gym-girl.jpg';
import equipmentImg from '../assets/equipment.jpg';
import nutritionImg from '../assets/nutrition.jpg';
import trainingImg from '../assets/training.jpg';
import customImg from '../assets/custom.jpg';
import yogaImg from '../assets/yoga.jpg';
import cardioImg from '../assets/cardio.jpg';

const defaultFeatures = {
  equipment: {
    title: 'Modern Equipment',
    description: 'We provide the latest fitness equipment to ensure efficient and safe workouts for every fitness goal.',
    image: equipmentImg,
  },
  nutrition: {
    title: 'Healthy Nutrition Plan',
    description: 'Our certified nutritionists craft meal plans that complement your workouts and improve your results.',
    image: nutritionImg,
  },
  training: {
    title: 'Professional Training Plan',
    description: 'Guided training plans by professional coaches tailored to your needs.',
    image: trainingImg,
  },
  custom: {
    title: 'Unique to Your Needs',
    description: 'Customized plans designed based on your personal fitness goals and body type.',
    image: customImg,
  },
  yoga: {
    title: 'Yoga Training',
    description: 'Improve flexibility and mindfulness through professional yoga sessions.',
    image: yogaImg,
  },
  cardio: {
    title: 'Cardio Training',
    description: 'Boost heart health and burn fat with engaging cardio programs.',
    image: cardioImg,
  },
};

const About = () => {
  const [features, setFeatures] = useState(defaultFeatures);
  const [popup, setPopup] = useState(null);
  const [editingKey, setEditingKey] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });
  const [aboutImage, setAboutImage] = useState(gymImage);
  const [imageUploadVisible, setImageUploadVisible] = useState(false);
  
  const [skills, setSkills] = useState([
    { name: 'Body building', percent: 80 },
    { name: 'Training', percent: 85 },
    { name: 'Fitness', percent: 90 },
  ]);
  const [skillForm, setSkillForm] = useState({ name: '', percent: '' });
  const [editingSkillIndex, setEditingSkillIndex] = useState(null);

  // Feature Handlers
  const openPopup = (key) => setPopup(features[key]);
  const closePopup = () => setPopup(null);

  const handleEdit = (key) => {
    setEditingKey(key);
    setFormData({ ...features[key] });
  };

  const handleDelete = (key) => {
    const updated = { ...features };
    delete updated[key];
    setFeatures(updated);
  };

  const handleAddNew = () => {
    setEditingKey('new');
    setFormData({ title: '', description: '', image: '' });
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.image) return;
    const key = editingKey === 'new' ? Date.now().toString() : editingKey;
    setFeatures({ ...features, [key]: formData });
    setEditingKey(null);
    setFormData({ title: '', description: '', image: '' });
  };

  // Skill Handlers
  const handleSkillSubmit = () => {
    const { name, percent } = skillForm;
    if (!name || isNaN(percent)) return;

    const updatedSkills = [...skills];
    if (editingSkillIndex !== null) {
      updatedSkills[editingSkillIndex] = skillForm;
    } else {
      updatedSkills.push(skillForm);
    }
    setSkills(updatedSkills);
    setSkillForm({ name: '', percent: '' });
    setEditingSkillIndex(null);
  };

  const handleSkillEdit = (index) => {
    setSkillForm(skills[index]);
    setEditingSkillIndex(index);
  };

  const handleSkillDelete = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  return (
    <div>
      <section className="about-us-section">
        <div className="about-left">
        <div className="about-img-wrapper">
  <img src={aboutImage} alt="gym" className="about-img" />
  <button onClick={() => setImageUploadVisible(true)} className="change-img-btn">Change Image</button>
</div>

{imageUploadVisible && (
  <div className="popup-overlay" onClick={() => setImageUploadVisible(false)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <span className="popup-close" onClick={() => setImageUploadVisible(false)}>&times;</span>
      <h2>Change About Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAboutImage(imageUrl);
            setImageUploadVisible(false);
          }
        }}
      />
    </div>
  </div>
)}

        </div>
        <div className="about-right">
          <h3>ABOUT US</h3>
          <h2>WHAT WE HAVE DONE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua...
          </p>

          {skills.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="label">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.percent}%` }}></div>
              </div>
              <div className="skill-actions">
                <button onClick={() => handleSkillEdit(i)}>Edit</button>
                <button onClick={() => handleSkillDelete(i)}>Delete</button>
              </div>
            </div>
          ))}

          <div className="skill-form">
            <input
              type="text"
              placeholder="Skill name"
              value={skillForm.name}
              onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Percentage"
              value={skillForm.percent}
              onChange={(e) => setSkillForm({ ...skillForm, percent: e.target.value })}
            />
            <button onClick={handleSkillSubmit}>
              {editingSkillIndex !== null ? 'Update Skill' : 'Add Skill'}
            </button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-header">
          <h3>WHY CHOOSE US?</h3>
          <h2>PUSH YOUR LIMITS FORWARD</h2>
          <button className="add-btn" onClick={handleAddNew}>+ Add New Feature</button>
        </div>

        <div className="about-features">
          {Object.entries(features).map(([key, item]) => (
            <div className="feature-card" key={key}>
              <i className="fas fa-dumbbell"></i>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="feature-actions">
                <button onClick={() => openPopup(key)}>View</button>
                <button onClick={() => handleEdit(key)}>Edit</button>
                <button onClick={() => handleDelete(key)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <img src={popup.image} alt={popup.title} className="popup-img" />
            <h2>{popup.title}</h2>
            <p>{popup.description}</p>
          </div>
        </div>
      )}

      {(editingKey !== null) && (
        <div className="popup-overlay" onClick={() => setEditingKey(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={() => setEditingKey(null)}>&times;</span>
            <h2>{editingKey === 'new' ? 'Add New Feature' : 'Edit Feature'}</h2>
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL or import"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
            <button onClick={handleSubmit}>{editingKey === 'new' ? 'Add' : 'Update'}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
