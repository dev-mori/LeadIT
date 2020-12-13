import React, { useState } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import RankProfile from "../components/RankProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const RankIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const getData = (isOpened, imageSrc) => {
    setIsOpen(isOpened);
    setImageSrc(imageSrc);
  };
  return (
    <div>
      <React.Fragment>
        <RankProfile getData={getData} imageSrc={imageSrc} />
        <div id="createAvatarDiv" />
      </React.Fragment>
    </div>
  );
};

export default RankIcon;
