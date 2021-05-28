// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
//href는 페이지 새로고침, 대신에 link
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to={{ pathname: "/about", state: { fromNavigation: true } }}> */}
        About
      {/* </Link> */}
    </div>
  );
}

export default Navigation;
