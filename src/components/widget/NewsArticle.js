import { FiberManualRecord } from "@mui/icons-material";
import React from "react";
import "./Widget.css";

const NewsArticle = ({ heading, subtitle }) => {
  return (
    <div>
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
