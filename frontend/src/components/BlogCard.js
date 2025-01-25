import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../BlogCard.css";
import axios from "axios";

function BlogCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogData, setBlogData] = useState({
    category: "",
    title: "",
    description: "",
    author: "",
  });
  const [apiBlogs, setApiBlogs] = useState([]);
  const [message, setMessage] = useState("");

  // Hardcoded blogs with correct dates
  const staticBlogs = [
    {
      id: 1,
      category: "Culture",
      date: "2022-07-05",
      title: "Exploring the Heart of Global Cultures",
      description:
        "Our culture fosters innovation, inclusivity, and a commitment to excellence, driving growth and success.",
      author: "John Doe",
    },
    {
      id: 2,
      category: "Sport",
      date: "2022-07-05",
      title: "Unleashing the Power of Sports Passion",
      description:
        "Sport unites us, promoting teamwork, discipline, and resilience, empowering individuals to achieve greatness.",
      author: "Jane Doe",
    },
    {
      id: 3,
      category: "Tech",
      date: "2022-03-01",
      title: "Innovating the Future with Technology",
      description:
        "Tech empowers progress, revolutionizing industries, enhancing efficiency, and shaping the future.",
      author: "Alice Smith",
    },
  ];

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      console.log("API Response: ", response); // Log API response to check date field

      if (response.data.success) {
        const blogsWithDates = response.data.blogs.map((blog) => ({
          ...blog,
          date: blog.date || "Unknown Date", // Ensure date fallback
        }));
        setApiBlogs(blogsWithDates);
      }
    } catch (error) {
      setMessage("Failed to fetch blogs. Please try again.");
      console.error(error);
    }
  };

  // Fetch blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Merge static and API blogs
  const allBlogs = [...staticBlogs, ...apiBlogs];

  const handlePostBlog = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split("T")[0];
    const blogPayload = { ...blogData, date: currentDate };
  
    console.log("Blog Payload: ", blogPayload); // Debugging
    try {
      const response = await axios.post("http://localhost:5000/api/blogs", blogPayload);
      console.log("API Response: ", response.data); // Debugging
      setMessage(response.data.message);
      setIsModalOpen(false);
      setBlogData({ category: "", title: "", description: "", author: "" });
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      setMessage("Failed to post blog. Please try again.");
      console.error(error);
    }
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
        {allBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-content">
              <p className="blog-meta">
                <span className="blog-category">{blog.category}</span> •{" "}
                {blog.date || "Unknown Date"}
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button className="read-more">Read More</button>
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
            <h2>Post a New Blogs</h2>
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
