import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowRight, FaUser, FaTags } from 'react-icons/fa';
import blogs from '../data/blogs';
import './blogs.css';

const Blogs = () => {
  // Function to create excerpt from HTML content
  const createExcerpt = (htmlContent) => {
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    const textContent = doc.body.textContent || "";
    return textContent.substring(0, 150) + (textContent.length > 150 ? "..." : "");
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Optionally add logic for submitting email
    alert("Thank you for subscribing!");
  };

  return (
    <section className="blogs-container">
      <header className="blogs-header">
        <h1>Watch Articles</h1>
        <p>Discover the latest insights, trends, and reviews in the world of luxury watches</p>
      </header>

      <section className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-image-container">
              <img 
                src={blog.image} 
                alt={blog.title || "Watch Blog Image"} 
                className="blog-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Watch+Blog';
                }}
              />
              <div className="blog-date">
                <FaCalendarAlt /> {blog.date}
              </div>
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <div className="blog-author">
                <FaUser /> {blog.author}
              </div>
              <div className="blog-summary">
                {blog.summary || createExcerpt(blog.content)}
              </div>
              <div className="blog-tags">
                <FaTags />
                {blog.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="blog-meta">
                <span className="read-time">
                  <FaClock /> {blog.readTime}
                </span>
                <Link to={`/blogs/${blog.id}`} className="read-more">
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="newsletter-cta">
        <h3>Stay Updated With Our Latest Articles</h3>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input type="email" placeholder="Your email address" required aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </aside>
    </section>
  );
};

export default Blogs;
