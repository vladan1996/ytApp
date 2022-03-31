import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../components/Video.css";

function Video({
  title,
  image,
  channelName,
  channel,
  views,
  channelImage,
  timestamps
}) {
  return (
    <div className="video">
      <img className="video__image" src={image} alt="" />
      <div className="video__info">
        <Avatar src={channelImage} className="video__avatar" alt={channel} />
        <div className="video__title">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} • {timestamps}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
