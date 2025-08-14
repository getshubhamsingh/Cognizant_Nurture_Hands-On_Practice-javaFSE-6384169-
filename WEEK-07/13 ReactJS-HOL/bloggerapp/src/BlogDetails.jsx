import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schewzdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{blog.title}</strong>
          <p><em>{blog.author}</em></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
