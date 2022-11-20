import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarStat from "./SidebarStat";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"># </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sonny Sangha</h2>
        <h4>sangha@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <SidebarStat desc="Who viewed you" stats="2,543" />
        <SidebarStat desc="Views on post" stats="1,068" />
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("software programming")}
        {recentItem("technical analysis")}
        {recentItem("fundamental analysis")}
      </div>
    </div>
  );
};

export default Sidebar;
