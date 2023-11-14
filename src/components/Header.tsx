import React from 'react';
import '../styles/Header.css';

export const Header: React.FC = () => {
  return (
    <header className="game-header">
      <div className="header-title">MioriticMinds test</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Rankings</a></li>
          <li><a href="#">My Account</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
