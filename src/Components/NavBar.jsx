import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark py-4 bg-dark">
  <Link to='/#'>CrudApp</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
       <Link to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/user'>User</Link>
      </li>
      
      <li className="nav-item">
        <Link to='/create'>Create</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default NavBar;