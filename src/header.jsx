import React from 'react';

const Header = ({ searchHandler }) => {
  return (
    <header>
      <h2>Zoo app</h2>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
      />
    </header>
  );
};

export default Header;
