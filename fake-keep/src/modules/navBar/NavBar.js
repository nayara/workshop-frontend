import React from 'react';
import './navbar.css';

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {props.titles.map((title, index) => (
          <li key={index}>
            <a href="/#">{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
