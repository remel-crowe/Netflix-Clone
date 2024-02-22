import React, { useEffect, useState } from "react";
import "./Nav.scss";

function Nav() {
  const [show, handleShow] = useState(false);

  const showNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavbar);
    return () => window.removeEventListener("scroll", showNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />

        <img
          className="nav_avatar"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
