import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={PeopleAltIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messaging" Icon={MessageIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption onClick={logOut} title="Me" avatar="true" />
      </div>
    </div>
  );
};

export default Header;
