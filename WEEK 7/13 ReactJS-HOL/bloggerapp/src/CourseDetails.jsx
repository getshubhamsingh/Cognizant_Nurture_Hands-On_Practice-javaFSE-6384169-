import React from 'react';

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div style={styles.section}>
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <strong>{course.name}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  section: {
    borderRight: "3px solid green",
    paddingRight: "20px",
    marginRight: "20px"
  }
};

export default CourseDetails;
