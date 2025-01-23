import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../BlogCard.css";

function BlogCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogData, setBlogData] = useState({
    category: "",
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      category: "Culture",
      date: "Jul 5th '22",
      title: "Exploring the Heart of Global Cultures",
      description:
        "Our culture fosters innovation, inclusivity, and a commitment to excellence, driving growth and success.",
    },
    {
      id: 2,
      category: "Sport",
      date: "Jul 5th '22",
      title: "Unleashing the Power of Sports Passion",
      description:
        "Sport unites us, promoting teamwork, discipline, and resilience, empowering individuals to achieve greatness.",
    },
    {
      id: 3,
      category: "Tech",
      date: "Mar 1st '22",
      title: "Innovating the Future with Technology",
      description:
        "Tech empowers progress, revolutionizing industries, enhancing efficiency, and shaping the future.",
    },
  ];

  

  const handlePostBlog = (e) => {
    e.preventDefault();
    console.log("Posted Blog:", blogData);
    setIsModalOpen(false); // Close modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  return (
    <>
      <Helmet>
        <title>Blogs - Explore, Innovate, and Achieve</title>
        <meta
          name="description"
          content="Dive into our blogs covering Culture, Sports, and Technology. Discover insights, foster growth, and stay inspired with our curated articles."
        />
        <meta
          name="keywords"
          content="Blogs, Culture, Sports, Technology, Innovation, Growth, Insights"
        />
      </Helmet>

      <div id="blog" className="blog-header">
        <h1>Blogs</h1>
      </div>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-content">
              <p className="blog-meta">
                <span className="blog-category">{blog.category}</span> •{" "}
                {blog.date}
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button
                className="read-more"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setIsModalOpen(true)} className="post-blog-btn">
        Post Blog
      </button>

      {isModalOpen && (
        <div className="modal-bottom-right">
          <div className="modal-content">
            <h2>Post a New Blog</h2>
            <form onSubmit={handlePostBlog}>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={blogData.category}
                  onChange={handleInputChange}
                  placeholder="Enter blog category"
                  required
                />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={blogData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={blogData.description}
                  onChange={handleInputChange}
                  placeholder="Enter blog description"
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Post Blog
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogCard;
