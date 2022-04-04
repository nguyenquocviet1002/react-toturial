import React, { Component } from "react";
const Nav = () => {
  return (
    <div className="w-full uppercase text-white bg-black py-3">
      <ul className="flex justify-center gap-3">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/add">Add</a>
        </li>
        <li>
          <a href="/list">List</a>
        </li>
      </ul>
    </div>
  );
};

class Header extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return <>{isLoggedIn ? <Nav /> : <h1>Login</h1>}</>;
  }
}

export default Header;
