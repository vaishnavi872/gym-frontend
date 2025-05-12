// Schedule.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Schedule.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { schedule } from '../data/data.jsx';



const Schedule = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header" data-aos="fade-up">
        <h5>CLASSES</h5>
        <h2>SCHEDULE</h2>
        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna.</p>
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

      <div className="schedule-content" data-aos="fade-left">
        {schedule[activeDay].length > 0 ? (
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Time</th>
                <th>Trainer</th>
              </tr>
            </thead>
            <tbody>
              {schedule[activeDay].map((item, index) => (
                <tr key={index}>
                  <td>{item.className}</td>
                  <td>{item.time}</td>
                  <td>{item.trainer}</td>
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

export default Schedule;

