import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLock, FaBookOpen, FaImages } from 'react-icons/fa'
import '../App.css';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const NavBar = () => {
  return (
    <nav className='d-flex align-items-center'>
      <NavLink to="/" style={{ textDecoration: 'none' }}
        className='d-flex'><h2>Nami Bot</h2><small>demo</small></NavLink>

      <ul className="nav">
        <li>
          <NavLink to="/screenshots"><FaImages />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/documentation"><FaBookOpen />
          </NavLink>
        </li>
        <li className="nav-item">
          <a href='https://github.com/sushuyu/NamiBot-Web' target='_blank' rel='noreferrer'><FaGithub />
          </a>
        </li>
        <li>
          <NavLink to="/privacy"><FaLock />
          </NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default NavBar;
