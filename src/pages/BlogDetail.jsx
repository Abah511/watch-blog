import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../data/blogs';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id || b.id === parseInt(id));

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div style={{ padding: '2rem' }}>
      {/* ✅ Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back to Blogs
      </button>

      <h2>{blog.title}</h2>
      <img
        src={blog.image}
        alt={blog.title}
        className="blog-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
        }}
        style={{ marginBottom: '1rem' }}
      />
      <div
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
