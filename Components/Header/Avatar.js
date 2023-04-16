import React from "react";
import avatarPic from "../../images/image-avatar.png";

function Avatar() {
  return (
    <div className="header__avatar">
      <img src={avatarPic} className="header__avatar--pic" alt="avatar" />
    </div>
  );
}

export default Avatar;
