import React from "react";
import "../components/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="http://www.truemice.com/img/profile.png"
        channel="Vladan"
        verified
        subs="333K"
        noOfVideo={382}
        description="Very powerfull channel with best things of programing in JS"
      />
      <hr />
      <VideoRow
        title="Lets build YouTube Thumbnail"
        views={332}
        subs="444K"
        description="Best You tube Cannel for learn programing in Js"
        timestamp={4}
        channel="Vladan"
        image="https://i.ytimg.com/vi/_v_TF8t3uOw/maxresdefault.jpg"
      />
      <VideoRow
        title="Lets build YouTube Thumbnail"
        views={332}
        subs="444K"
        description="Best You tube Cannel for learn programing in Js"
        timestamp={4}
        channel="Vladan"
        image="https://i.ytimg.com/vi/_v_TF8t3uOw/maxresdefault.jpg"
      />
      <VideoRow
        title="Lets build YouTube Thumbnail"
        views={332}
        subs="444K"
        description="Best You tube Cannel for learn programing in Js"
        timestamp={4}
        channel="Vladan"
        image="https://i.ytimg.com/vi/_v_TF8t3uOw/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
