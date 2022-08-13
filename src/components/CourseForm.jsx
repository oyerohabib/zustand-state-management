import React, { useState } from "react";
import { useCourseStore } from "../App/courseStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const handleSubmit = () => {
    if (!courseTitle)
      return toast.error("please enter a course title", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    addCourse({
      id: new Date().getTime(),
      title: courseTitle,
      completed: false,
    });
    toast.success("Successfully added course", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button onClick={() => handleSubmit()} className="form-submit-btn">
        Add course
      </button>
    </div>
  );
};

export default CourseForm;
