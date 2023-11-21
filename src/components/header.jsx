// import React from 'react';
import { NavLink } from "react-router-dom";

const Header = ({ searchHandler }) => {
  return (
    <header>
      <a href='/'><h2>Zoo app</h2></a>
      <nav>
        <ul>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/animals'>Animals</NavLink></li>
       <li><NavLink to='/birds'>Birds</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
        </ul>
       </nav>
      {/* <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
      /> */}
    </header>
  );
};

export default Header;
