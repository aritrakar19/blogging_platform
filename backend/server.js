const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./model/contact');
const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // To handle CORS issues

mongoose.connect("mongodb://localhost:27017/blogging-platfrom")

// POST route for contact form
app.post('/api/contact', (req, res) => {
  console.log(req.body);
  
  // const { name, email, message } = req.body;
  Contact.create(req.body)
  .then((contact) => {
    res.status(200).json({ success: true, message: 'Message received!' });
  }).catch((err) => { 
    res.status(500).json({ success: false, message: 'Message not received!' }); 
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
