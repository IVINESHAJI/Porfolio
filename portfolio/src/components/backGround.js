import React from "react";
import "../styles/backVideo.css";
import backVideo from '../videos/back.mp4'

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className="background-video">
      <source src={ backVideo } type="video/mp4" autoPlay />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
