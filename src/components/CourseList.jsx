import React from "react";
import useCourseStore from "../App/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <>
      <ul>
        {courses.map((course, id) => {
          return (
            <React.Fragment key={id}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "green" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span className="course-title">{course.title}</span>
                <button
                  className="delete-btn"
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                >
                  Delete Course
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
