import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import InputOption from "../feed/InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <>
      {message && (
        <div className="post">
          <div className="post__header">
            <Avatar />
            <div className="post__info">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="post__body">
            <p>{message}</p>
          </div>

          <div className="post__buttons">
            <InputOption title="Like" Icon={ThumbUpAltOutlined} color="grey" />
            <InputOption title="Comment" Icon={ChatOutlined} color="grey" />
            <InputOption title="Share" Icon={ShareOutlined} color="grey" />
            <InputOption title="Send" Icon={SendOutlined} color="grey" />
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
