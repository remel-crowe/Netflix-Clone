import React from "react";
import "./ProfileScreen.scss";
import Nav from "../components/navbar/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Nav showSearch={false} showHeaders={false} />
      <h1>Edit Profile</h1>
      <div className="profileScreen__info">
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
          className="profileScreen_avatar"
        />
        <div className="profileScreen_user">
          <h1>{user.email}</h1>
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
