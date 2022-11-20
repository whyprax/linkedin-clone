import React from "react";
import "./Sidebar.css";

const SidebarStat = ({ desc, stats }) => {
  return (
    <div className="sidebar__stat">
      <p>{desc}</p>
      <span className="sidebar__statNumber">{stats}</span>
    </div>
  );
};

export default SidebarStat;
