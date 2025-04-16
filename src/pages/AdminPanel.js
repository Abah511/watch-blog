import { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    imageUrl: ''
  });

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs(); // run on component mount
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (res.ok) {
        const savedBlog = await res.json();  // Save the returned blog
        alert('✅ Blog added successfully!');
        setBlogs((prevBlogs) => [...prevBlogs, savedBlog]); // Add the new blog to the list
        setFormData({ title: '', summary: '', content: '', imageUrl: '' }); // Reset form
      } else {
        alert('❌ Failed to add blog');
      }
    } catch (error) {
      console.error(error);
      alert('🚨 Error connecting to server');
    }
  };
  

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" /><br />
        <input name="summary" value={formData.summary} onChange={handleChange} placeholder="Summary" /><br />
        <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Content" /><br />
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" /><br />
        <button type="submit">Add Blog</button>
      </form>

      <h3>📚 Blogs:</h3>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <strong>{blog.title}</strong> - {blog.summary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
