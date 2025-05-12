// components/ClassForm.jsx
import React from "react";
import "../styles/class-form.css";

const ClassForm = ({ classData, setClassData, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData({ ...classData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Title"
    value={classData.title}
    onChange={(e) => setClassData({ ...classData, title: e.target.value })}
  />
  <textarea
    placeholder="Description"
    value={classData.description}
    onChange={(e) => setClassData({ ...classData, description: e.target.value })}
  />
  <input
    type="text"
    placeholder="Image URL"
    value={classData.image}
    onChange={(e) => setClassData({ ...classData, image: e.target.value })}
  />
  <button type="submit">Save</button>
</form>

  );
};

export default ClassForm;
