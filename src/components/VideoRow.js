import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
  title
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} className="videoRow__img" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span>
            Subscribers
          </span>
          • {views} K views • {timestamp} day ago
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
