import React from "react";
import "./style.scss";
function Banner(props) {
  const { data } = props;
  const { imgName } = data;
  return (
    <div className="bannerContainer">
      <img
        alt="banner"
        className="imgContainer"
        src={`http://remote.fizzmod.com/T7k15Pp693gLnT2x/frontend/assets/images/${imgName}`}
      />
    </div>
  );
}

export default Banner;
