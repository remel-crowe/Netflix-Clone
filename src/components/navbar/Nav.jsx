import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";

function Nav({ showSearch = true, showHeaders = true, search, setSearch }) {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

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
          onClick={() => {
            navigate("/");
          }}
        />

        {showHeaders && (
          <ul className="nav_headers">
            <li>Series</li>
            <li>Movies</li>
            <li>New & Popular</li>
          </ul>
        )}
        {showSearch && (
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Titles, people, genres"
          />
        )}

        <img
          className="nav_avatar"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
          alt="Netflix Avatar"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
