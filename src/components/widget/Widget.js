import { InfoOutlined } from "@mui/icons-material";
import React from "react";
import NewsArticle from "./NewsArticle";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlined />
      </div>

      <NewsArticle heading="ReactJS Event" subtitle="2025 Mega reactjs event" />
      <NewsArticle heading="ReactJS Event" subtitle="2025 Mega reactjs event" />
      <NewsArticle heading="ReactJS Event" subtitle="2025 Mega reactjs event" />
      <NewsArticle heading="ReactJS Event" subtitle="2025 Mega reactjs event" />
      <NewsArticle heading="ReactJS Event" subtitle="2025 Mega reactjs event" />
      <NewsArticle heading="ReactJS Event" subtitle="2025 Mega reactjs event" />
    </div>
  );
};

export default Widget;
