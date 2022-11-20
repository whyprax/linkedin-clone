import React from "react";
import "./Feed.css";

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="feed__inputOption">
      {Icon && <Icon style={{ color: color }} />}
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
