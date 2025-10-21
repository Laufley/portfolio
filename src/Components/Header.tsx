import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  route?: string;
  setRoute?: (route: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setRoute }) => {
  const handleNav = (path: string) => () => {
    if (setRoute) setRoute(path);
  };

  return (
    <nav id="nav">
      <Link to="/home" onClick={handleNav('/')}>Home</Link>
      <Link to="/projects" onClick={handleNav('/projects')}>Projects</Link>
      <Link to="/about" onClick={handleNav('/about')}>About</Link>
      <Link to="/CV" onClick={handleNav('/CV')}>CV</Link>
    </nav>
  );
};

export default Header;