import React from 'react';

function BookDetails() {
  const books = [
    { title: "Master React", price: 670 },
    { title: "Deep Dive into Angular 11", price: 800 },
    { title: "Mongo Essentials", price: 450 }
  ];

  return (
    <div style={styles.section}>
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <strong>{book.title}</strong>
          <p>{book.price}</p>
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

export default BookDetails;
