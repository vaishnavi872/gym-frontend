// admin/classes/AddClass.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassForm from "../../components/ClassForm";
import "./adminclasses.css";


const AddClass = () => {
  const [newClass, setNewClass] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const existing = JSON.parse(localStorage.getItem("classes")) || [];
    const newEntry = { ...newClass, id: Date.now().toString() };
    const updated = [...existing, newEntry];
  
    localStorage.setItem("classes", JSON.stringify(updated));
  
    console.log("New class added:", newEntry);
    navigate("/admin/classes");
  };
  const handleAddClass = () => {
    const stored = JSON.parse(localStorage.getItem("scheduleData")) || {};
    const updated = { ...stored };
  
    const entry = {
      className: newEntry.className,
      time: newEntry.time,
      trainer: newEntry.trainer
    };
  
    if (!updated[activeDay]) updated[activeDay] = [];
    updated[activeDay].push(entry);
  
    localStorage.setItem("scheduleData", JSON.stringify(updated));
    setNewEntry({ className: "", time: "", trainer: "" });
  };
  
  

  return (
    <div className="add-class">
      <h2>Add New Class</h2>
      <ClassForm
        classData={newClass}
        setClassData={setNewClass}
        handleSubmit={handleSubmit}
      />
  
      <hr style={{ margin: "2rem 0" }} />
  
      
      
    </div>
  );
  
};

export default AddClass;
