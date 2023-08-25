import { NavLink } from 'react-router-dom';
import user from '../user.png';

const Navbar = () => (
  <div className="navigationbar">
    <h1 className="bookstorecms">Bookstore CMS</h1>
    <nav>
      <NavLink to="/"> Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>
    <div className="circleborder">
      <img alt="user" className="user-logo" src={user} />
    </div>
  </div>
);

export default Navbar;
