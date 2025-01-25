const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb+srv://Aritrakar19:RNWjg.YAgCDwCy2@cluster0.4byyy.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Blog schema
const blogSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
},
  { timestamps: true }
);

// Contact schema (define it first)
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
},
  { timestamps: true }
);

// Create the Contact model after defining the schema
const Contact = mongoose.model("Contact", contactSchema);
const Blog = mongoose.model("Blog", blogSchema);

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: "Contact saved successfully!", contact });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to save contact", error: err.message });
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Blogging website API");
});

app.post("/api/blogs", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, message: "Blog posted successfully!", blog });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to post blog", error: err.message });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch blogs", error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
