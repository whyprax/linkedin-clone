import { Avatar } from "@mui/material";
import React from "react";
import "./Header.css";

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h4 className="headerOption__title">{title}</h4>
    </div>
  );
};

export default HeaderOption;
