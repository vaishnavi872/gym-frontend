import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./adminclasses.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const ClassesList = () => {
  const [classes, setClasses] = useState([]);
  const [schedule, setSchedule] = useState(() => {
    return JSON.parse(localStorage.getItem("schedule")) || {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
    };
  });
  const [activeDay, setActiveDay] = useState("Monday");
  const [newSchedule, setNewSchedule] = useState({
    className: "",
    time: "",
    trainer: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Load saved classes
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("classes")) || [];
    setClasses(stored);
  }, []);

  // Save schedule to localStorage
  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const handleDeleteClass = (id) => {
    if (window.confirm("Delete this class?")) {
      const updated = classes.filter((c) => c.id !== id);
      setClasses(updated);
      localStorage.setItem("classes", JSON.stringify(updated));
    }
  };

  const handleAddSchedule = () => {
    if (!newSchedule.className || !newSchedule.time || !newSchedule.trainer) return;

    // Add or update schedule
    const updatedDay = [...schedule[activeDay]];
    if (editingIndex !== null) {
      updatedDay[editingIndex] = newSchedule;
    } else {
      updatedDay.push(newSchedule);
    }

    setSchedule({ ...schedule, [activeDay]: updatedDay });
    setNewSchedule({ className: "", time: "", trainer: "" });
    setEditingIndex(null);
  };

  const handleDeleteSchedule = (index) => {
    const updatedDay = schedule[activeDay].filter((_, i) => i !== index);
    setSchedule({ ...schedule, [activeDay]: updatedDay });
  };

  const handleEditSchedule = (index) => {
    const item = schedule[activeDay][index];
    setNewSchedule({ ...item });
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setNewSchedule({ className: "", time: "", trainer: "" });
    setEditingIndex(null);
  };

  return (
    <div className="classes-list">
      <div className="classes-header">
        <h2>Manage Classes</h2>
        <Link to="/admin/classes/add" className="add-button">+ Add Class</Link>
      </div>

      {/* List of class cards */}
      <div className="classes-grid">
        {classes.map((cls) => (
          <div key={cls.id} className="class-card">
            <img src={cls.image} alt={cls.title} className="class-image" />
            <h3>{cls.title}</h3>
            <p>{cls.description}</p>
            <div className="class-actions">
              <Link to={`/admin/classes/edit/${cls.id}`} className="edit-btn">Edit</Link>
              <button onClick={() => handleDeleteClass(cls.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule section */}
      <hr />
      <h2>Class Schedule</h2>

      <div className="schedule-tabs">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(day);
              setNewSchedule({ className: "", time: "", trainer: "" });
              setEditingIndex(null);
            }}
            className={activeDay === day ? "active" : ""}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-inputs">
        <input
          type="text"
          placeholder="Class Name"
          value={newSchedule.className}
          onChange={(e) => setNewSchedule({ ...newSchedule, className: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time"
          value={newSchedule.time}
          onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Trainer"
          value={newSchedule.trainer}
          onChange={(e) => setNewSchedule({ ...newSchedule, trainer: e.target.value })}
        />

        <button onClick={handleAddSchedule}>
          {editingIndex !== null ? "Save" : "Add Class"}
        </button>

        {editingIndex !== null && (
          <button onClick={handleCancelEdit} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        )}
      </div>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Time</th>
            <th>Trainer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedule[activeDay].map((item, index) => (
            <tr key={index}>
              <td>{item.className}</td>
              <td>{item.time}</td>
              <td>{item.trainer}</td>
              <td>
                <button onClick={() => handleEditSchedule(index)}>Edit</button>
                <button onClick={() => handleDeleteSchedule(index)} style={{ marginLeft: "10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesList;
