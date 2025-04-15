import { Link } from 'react-router-dom';
import blogs from '../data/blogs';  // Correct default import

const Blogs = () => (
  <div>
    <h2>Blog Articles</h2>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{blog.summary}</p>
        <Link to={`/blogs/${blog.id}`}>Read More</Link>
      </div>
    ))}
  </div>
);

export default Blogs;