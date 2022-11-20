import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import InputOption from "../feed/InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <>
      {message && (
        <div ref={ref} className="post">
          <div className="post__header">
            <Avatar src={photoUrl} />
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
});

export default Post;
