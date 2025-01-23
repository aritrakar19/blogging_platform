import React from "react";
import { useParams } from "react-router-dom";
// import "../BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      category: "Culture",
      date: "Jul 5th '22",
      title: "Exploring the Heart of Global Cultures",
      content: "Full content of the Culture blog goes here...",
    },
    {
      id: 2,
      category: "Sport",
      date: "Jul 5th '22",
      title: "Unleashing the Power of Sports Passion",
      content: "Full content of the Sport blog goes here...",
    },
    {
      id: 3,
      category: "Tech",
      date: "Mar 1st '22",
      title: "Innovating the Future with Technology",
      content: "Full content of the Tech blog goes here...",
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p className="blog-meta">
        <span className="blog-category">{blog.category}</span> • {blog.date}
      </p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
