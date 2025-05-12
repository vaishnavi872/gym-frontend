import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClassForm from "../../components/ClassForm";
import "./adminclasses.css";

const EditClass = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("classes")) || [];
    const selected = stored.find((cls) => cls.id === parseInt(id));
    if (selected) {
      setClassData(selected);
    } else {
      navigate("/admin/classes");
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("classes")) || [];
    const updated = stored.map((cls) =>
      cls.id === parseInt(id) ? classData : cls
    );
    localStorage.setItem("classes", JSON.stringify(updated));
    navigate("/admin/classes");
  };

  if (!classData) return <p>Loading class...</p>;

  return (
    <div className="edit-class">
      <h2>Edit Class</h2>
      <ClassForm
        classData={classData}
        setClassData={setClassData}
        handleSubmit={handleSubmit}
      />

    </div>
  );
};

export default EditClass;
