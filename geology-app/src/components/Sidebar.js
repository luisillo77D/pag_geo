import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-light sidebar">
      <div className="sidebar-sticky">
        {/* Navbar Brand */}
        <Link to="/" className="navbar-brand">
          Geología App
        </Link>

        {/* Navbar */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/samples" className="nav-link">
              Muestras
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/muestrasadd" className="nav-link">
              muestrasadd
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Usuarios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
