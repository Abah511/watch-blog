// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const Blog = require('./models/blog'); // make sure the file is named `blog.js` (lowercase)

// const app = express();
// const PORT = 5000;

// // middleware
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ ROOT route
// app.get('/', (req, res) => {
//   res.send('🚀 Backend is working!');
// });

// // ✅ GET all blogs
// app.get('/api/blogs', async (req, res) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error fetching blogs' });
//   }
// });

// // ✅ POST blog
// app.post('/api/blogs', async (req, res) => {
//     try {
//       console.log("📥 New blog received:", req.body); // ✅ Add this
//       const newBlog = new Blog(req.body);
//       await newBlog.save();
//       res.status(201).json({ message: 'Blog saved successfully' });
//     } catch (error) {
//       console.error("❌ Error saving blog:", error);
//       res.status(500).json({ error: 'Error saving blog' });
//     }
//   });
  

// // ✅ connect to MongoDB
// mongoose.connect('mongodb+srv://abah5113306:UFyx5tX5VgMGaNTV@cluster0.zfs0rye.mongodb.net/watchblog?retryWrites=true&w=majority&authSource=admin')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.log('❌ MongoDB connection error:', err));

// // ✅ start server
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });























const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Blog = require('./models/blog'); // Ensure this path is correct

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Backend is working!');
});

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching blogs' });
  }
});

// Post a new blog
app.post('/api/blogs', async (req, res) => {
  try {
    console.log('📥 New blog received:', req.body);
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog); // Return the saved blog
  } catch (error) {
    console.error('❌ Error saving blog:', error);
    res.status(500).json({ error: 'Error saving blog' });
  }
});

// Update a blog
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    console.error('❌ Error updating blog:', error);
    res.status(500).json({ error: 'Error updating blog' });
  }
});

// Delete a blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting blog:', error);
    res.status(500).json({ error: 'Error deleting blog' });
  }
});

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://abah5113306:UFyx5tX5VgMGaNTV@cluster0.zfs0rye.mongodb.net/watchblog?retryWrites=true&w=majority&authSource=admin')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});