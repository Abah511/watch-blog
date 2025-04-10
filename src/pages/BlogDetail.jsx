import { useParams } from 'react-router-dom';
import blogs from '../data/blogs'; // Correct default import

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} width="300" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
