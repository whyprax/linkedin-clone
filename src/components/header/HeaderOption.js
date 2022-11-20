import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Header.css";

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h4 className="headerOption__title">{title}</h4>
    </div>
  );
};

export default HeaderOption;
