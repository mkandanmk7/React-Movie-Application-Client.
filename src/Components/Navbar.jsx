import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Movies
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Details</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
