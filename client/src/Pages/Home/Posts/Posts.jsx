import React from "react";
import Post from "./Post";
import "../../../sass/pages/Home/Posts/posts.scss";
import Post1 from "../../../assets/Post1.jpg";
import Post2 from "../../../assets/Post2.jpg";

const Posts = () => {
  return (
    <div>
      <div className="post-cards">
        <Post src={Post1} />
        <Post src={Post2} />
      </div>
    </div>
  );
};

export default Posts;
