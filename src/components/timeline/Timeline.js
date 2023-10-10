import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./Suggestion";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "shubham_Jadhav",
      postImage:
        "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "__amupatil__",
      postImage:
        "https://www.w3schools.com/howto/img_5terre.jpg",
      likes: 122,
      timestamp: "1d",
    },
    {
      user: "ravina_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
      likes: 12,
      timestamp: "2h",
    },
    {
      user: "anita",
      postImage:
        "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      likes: 12,
      timestamp: "3d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
