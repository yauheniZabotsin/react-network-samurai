import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://images.pexels.com/photos/3153040/pexels-photo-3153040.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
