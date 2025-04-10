import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/inventory">Inventory</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/admin">Admin</Link>
    
  </nav>
);

export default Navbar;
