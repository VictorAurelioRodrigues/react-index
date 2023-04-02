import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;