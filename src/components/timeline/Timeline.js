import React from "react";
import "./Timeline.css";
import Suggestion from "./Suggestion";
import Post from "./posts/Post";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left"> 
      <div className="timeline__posts">
        <Post/>
      </div>
      </div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
