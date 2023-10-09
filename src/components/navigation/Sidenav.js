import React from "react";
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';

function Sidenav() {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src="insta-image.png" alt=""/>
      <div className="sidenav__buttons">
        <button className="sidenav_button">
            <HomeIcon/>
           <span>Home</span>
        </button>
        <button className="sidenav_button">
            <SearchIcon/>
           <span>Search</span>
        </button>
        <button className="sidenav_button">
            <ExploreIcon/>
           <span>Explore</span>
        </button>
        <button className="sidenav_button">
            <SlideshowIcon/>
           <span>Reels</span>
        </button>
        <button className="sidenav_button">
            <ChatIcon/>
           <span>Messages</span>
        </button>
        <button className="sidenav_button">
            <FavoriteBorderIcon/>
           <span>Notification</span>
        </button>
        <button className="sidenav_button">
            <AddCircleOutlineIcon/>
           <span>reels</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav_button">
            <MenuIcon/>
            <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
