import React from 'react';
import './header.css'; 

function Header() {
  return (
    <div className="header-container">
      <h1>Micro-frontends</h1>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À Propos</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

