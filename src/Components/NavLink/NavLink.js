import React from 'react';
import { Link } from "gatsby"
import './navLink.css';

const NavLink = ({ href, text}) => (
  <Link className='nav-link' to={href}>{text}</Link>
)
export default NavLink;
