import React from "react";
import banner from "public/images/Hero.svg"
import 'app/styles/modules/Banner.scss'
const Banner: React.FC = (): React.ReactElement => {
  return (
    <div>
      <img className="banner-img" alt="" src={banner} />
    </div>
  );
};
export default Banner