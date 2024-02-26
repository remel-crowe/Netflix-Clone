import React from "react";
import "./ProfileScreen.scss";
import Nav from "../components/navbar/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const naviagte = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav showSearch={false} showHeaders={false} />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" />
          <div className="profileScreen_user">
            <h1>{user.email}</h1>
            <button
              onClick={() => {
                auth.signOut();
                naviagte("/");
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
