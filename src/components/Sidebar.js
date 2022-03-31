import React from "react";
import "../components/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SidebarRow from "../components/SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your video" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked video" Icon={ThumbUpAltIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
