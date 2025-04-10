/*import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/inventory">Inventory</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/admin">Admin</Link>
    
  </nav>
);

export default Navbar; */

import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll add styles here

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/inventory">Inventory</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  </nav>
);

export default Navbar;

