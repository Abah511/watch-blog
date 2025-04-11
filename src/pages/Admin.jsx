import React, { useState } from 'react';
import { FaPlusCircle, FaImage, FaSave, FaTrash, FaEdit } from 'react-icons/fa';
import './Admin.css';

const Admin = () => {
  const [blog, setBlog] = useState({
    title: '',
    summary: '',
    imageUrl: '',
    fullContent: ''
  });
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      // Update existing blog
      setBlogs(blogs.map(item => 
        item.id === editingId ? { ...blog, id: editingId } : item
      ));
      setEditingId(null);
    } else {
      // Add new blog
      setBlogs([...blogs, { ...blog, id: Date.now() }]);
    }
    setBlog({ title: '', summary: '', imageUrl: '', fullContent: '' });
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find(blog => blog.id === id);
    setBlog(blogToEdit);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <nav className="admin-nav">
          <a href="#" className="active">Add Blog</a>
          <a href="#">Manage Blogs</a>
          <a href="#">User Management</a>
          <a href="#">Site Settings</a>
        </nav>
      </div>

      <div className="admin-content">
        <div className="blog-form-container">
          <h2>{editingId ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
          <form onSubmit={handleSubmit} className="blog-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={blog.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <textarea
                id="summary"
                name="summary"
                value={blog.summary}
                onChange={handleChange}
                rows="3"
                placeholder="Brief summary for the blog"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">
                <FaImage /> Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={blog.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
              {blog.imageUrl && (
                <div className="image-preview">
                  <img src={blog.imageUrl} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="fullContent">Full Content</label>
              <textarea
                id="fullContent"
                name="fullContent"
                value={blog.fullContent}
                onChange={handleChange}
                rows="8"
                placeholder="Write your blog content here"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingId ? (
                  <>
                    <FaSave /> Update Blog
                  </>
                ) : (
                  <>
                    <FaPlusCircle /> Add Blog
                  </>
                )}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => {
                    setBlog({ title: '', summary: '', imageUrl: '', fullContent: '' });
                    setEditingId(null);
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="blog-list-container">
          <h2>Existing Blog Posts ({blogs.length})</h2>
          {blogs.length === 0 ? (
            <p className="no-blogs">No blog posts yet. Add your first blog!</p>
          ) : (
            <div className="blog-list">
              {blogs.map(blog => (
                <div key={blog.id} className="blog-item">
                  <div className="blog-item-header">
                    <h3>{blog.title}</h3>
                    <div className="blog-actions">
                      <button onClick={() => handleEdit(blog.id)} className="edit-btn">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(blog.id)} className="delete-btn">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <p className="blog-summary">{blog.summary}</p>
                  {blog.imageUrl && (
                    <div className="blog-image-preview">
                      <img src={blog.imageUrl} alt={blog.title} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;