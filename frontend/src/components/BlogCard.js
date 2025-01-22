import React from "react";
import { Helmet } from "react-helmet";
import "../BlogCard.css";

function BlogCard() {
  const blogs = [
    {
      category: "Culture",
      date: "Jul 5th '22",
      title: "Exploring the Heart of Global Cultures",
      description:
        "Our culture fosters innovation, inclusivity, and a commitment to excellence, driving growth and success.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDMCGIHiqGijB1r9w3NyJR-zNzyPd09yjTtaj5rFyF1JXgDpT2HdLclR4CftFendMLIQ&usqp=CAU",
    },
    {
      category: "Sport",
      date: "Jul 5th '22",
      title: "Unleashing the Power of Sports Passion",
      description:
        "Sport unites us, promoting teamwork, discipline, and resilience, empowering individuals to achieve greatness.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDMCGIHiqGijB1r9w3NyJR-zNzyPd09yjTtaj5rFyF1JXgDpT2HdLclR4CftFendMLIQ&usqp=CAU",
    },
    {
      category: "Tech",
      date: "Mar 1st '22",
      title: "Innovating the Future with Technology",
      description:
        "Tech empowers progress, revolutionizing industries, enhancing efficiency, and shaping the future.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDMCGIHiqGijB1r9w3NyJR-zNzyPd09yjTtaj5rFyF1JXgDpT2HdLclR4CftFendMLIQ&usqp=CAU",
    },
  ];

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
        <meta property="og:title" content="Blogs - Explore, Innovate, and Achieve" />
        <meta
          property="og:description"
          content="Dive into our blogs covering Culture, Sports, and Technology. Discover insights, foster growth, and stay inspired with our curated articles."
        />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDMCGIHiqGijB1r9w3NyJR-zNzyPd09yjTtaj5rFyF1JXgDpT2HdLclR4CftFendMLIQ&usqp=CAU"
        />
        <meta property="og:url" content="https://blog-verse-omega.vercel.app/#blog" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>

      <div id="blog" className="blog-header">
        <h1>Blogs</h1>
      </div>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="blog-image" />
            )}
            <div className="blog-content">
              <p className="blog-meta">
                <span className="blog-category">{blog.category}</span> •{" "}
                {blog.date}
              </p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogCard;
