import React, { useState } from "react";
import useCourseStore from "../App/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");
  console.log("courseForm rendered");

  const handleSubmit = () => {
    if (!courseTitle) return alert("please enter a course title");
    addCourse({
      id: new Date().getTime(),
      title: courseTitle,
    });
    setCourseTitle("")
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="form-submit-btn"
      >
        Add course
      </button>
    </div>
  );
};

export default CourseForm;
