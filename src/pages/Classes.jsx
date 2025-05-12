import React from 'react';
import '../styles/Classes.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Schedule from '../components/Schedule';
import { classesData } from '../data/data.jsx';



const Classes = () => {
  return (
    <Layout >
    <section className="classes-section" id="classes">
      <div className="classes-header" data-aos="flip-up" data-aos-duration="4000">
        <h5>OUR CLASSES</h5>
        <h2>CHOOSE OUR PROGRAMS</h2>
      </div>
      <div className="classes-list">
        {classesData.map((cls, index) => (
          <div
            className="class-card"
            key={index}
            data-aos="slide-up"
            data-aos-delay={index * 1000}
            data-aos-duration="2000"
          >
            <img src={cls.image} alt={cls.title} />
            <div className="class-info">
              <h3>{cls.title}</h3>
              <p>{cls.description}</p>
              <Link to={cls.link} className="join-btn">Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Schedule />
    </Layout>
  );
};

export default Classes;
