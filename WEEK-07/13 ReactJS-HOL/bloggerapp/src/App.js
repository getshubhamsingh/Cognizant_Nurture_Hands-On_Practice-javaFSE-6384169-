import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CourseDetails />
        <BookDetails />
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
