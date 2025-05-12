import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const defaultSchedule = {
  Monday: [
    { className: "Fitness Class", time: "2:00PM - 3:30PM", trainer: "William G. Stewart" },
    { className: "Yoga Training Class", time: "10:00AM - 11:30AM", trainer: "Hector T. Dalgle" },
  ],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
};

const AdminSchedule = () => {
  const [schedule, setSchedule] = useState(() => {
    const stored = localStorage.getItem("scheduleData");
    return stored ? JSON.parse(stored) : defaultSchedule;
  });

  const [activeDay, setActiveDay] = useState("Monday");
  const [newEntry, setNewEntry] = useState({ className: "", time: "", trainer: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    localStorage.setItem("scheduleData", JSON.stringify(schedule));
  }, [schedule]);

  const handleAddOrUpdate = () => {
    if (!newEntry.className || !newEntry.time || !newEntry.trainer) return;

    const updatedDay = [...schedule[activeDay]];
    if (editIndex !== null) {
      updatedDay[editIndex] = newEntry;
    } else {
      updatedDay.push(newEntry);
    }

    setSchedule({ ...schedule, [activeDay]: updatedDay });
    setNewEntry({ className: "", time: "", trainer: "" });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewEntry(schedule[activeDay][index]);
  };

  const handleDelete = (index) => {
    const updatedDay = schedule[activeDay].filter((_, i) => i !== index);
    setSchedule({ ...schedule, [activeDay]: updatedDay });
  };

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header" data-aos="fade-up">
        <h5>ADMIN PANEL</h5>
        <h2>MANAGE SCHEDULE</h2>
      </div>

      <div className="schedule-tabs" data-aos="fade-up">
        {Object.keys(schedule).map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={activeDay === day ? 'active' : ''}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-form">
        <input
          type="text"
          placeholder="Class Name"
          value={newEntry.className}
          onChange={(e) => setNewEntry({ ...newEntry, className: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time"
          value={newEntry.time}
          onChange={(e) => setNewEntry({ ...newEntry, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Trainer"
          value={newEntry.trainer}
          onChange={(e) => setNewEntry({ ...newEntry, trainer: e.target.value })}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update Class" : "Add Class"}
        </button>
      </div>

      <div className="schedule-content" data-aos="fade-left">
        {schedule[activeDay].length > 0 ? (
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
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-class">No classes scheduled for {activeDay}</p>
        )}
      </div>
    </section>
  );
};

export default AdminSchedule;
