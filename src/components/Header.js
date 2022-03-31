import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="w-full uppercase text-white bg-black py-3">
        <ul className="flex justify-center gap-3">
          <li>
            <a href="#">link1</a>
          </li>
          <li>
            <a href="#">link2</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
