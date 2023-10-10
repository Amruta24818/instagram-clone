import React from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";

function Suggestion() {
  return (
    <div className="suggestons">
      <div className="suggestions__title">Sugestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
                <Avatar>R</Avatar>
            </span>
            <div className="username__info">
                <span className="username">Shubham</span>
                <span className="relation">New to insta</span>
            </div>
          </div>
          <button className="follow__button">follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
                <Avatar>R</Avatar>
            </span>
            <div className="username__info">
                <span className="username">Shubham</span>
                <span className="relation">New to insta</span>
            </div>
          </div>
          <button className="follow__button">follow</button>
        </div>
         <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
                <Avatar>R</Avatar>
            </span>
            <div className="username__info">
                <span className="username">Shubham</span>
                <span className="relation">New to insta</span>
            </div>
          </div>
          <button className="follow__button">follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
