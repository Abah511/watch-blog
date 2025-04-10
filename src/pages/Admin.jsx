import { useState } from 'react';
import blogs from './blogs';  // Corrected import
import { v4 as uuidv4 } from 'uuid';

const Admin = () => {
  const [blogData, setBlogData] = useState({ title: '', summary: '', content: '', image: '' });

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleAddBlog = () => {
    const newBlog = { ...blogData, id: uuidv4() };
    blogs.push(newBlog); // For demo only, not persistent
    alert('Blog added!');
  };

  return (
    <div>
      <h2>Admin Panel - Add Blog</h2>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="summary" placeholder="Summary" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <textarea name="content" placeholder="Full Content" onChange={handleChange} />
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default Admin;
