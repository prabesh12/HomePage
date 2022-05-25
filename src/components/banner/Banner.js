import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="container-fluid banner">
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        <div className="ellipse5"></div>
        <div className="ellipse6"></div>
        <div className="ellipse7"></div>
        <div className="ellipse8"></div>
        <div className="ellipse9"></div>
        <div className="ellipse10"></div>

        <div className="container ">
          <div className="wrapper">
            <div className="content">
              <div className="text">
                <p className="title">WE HEAR</p>
                <p className="heading">
                  Website Development and Graphic Designing
                </p>
                <p className="description">
                  We provide a complete web and app solution by providing you
                  the esential services including branding, graphic design,
                  UX/UI design, web development, content, social media
                  integration, SEO, and online marketing.
                </p>
              </div>
              <div></div>
              <div className="connect_now">
                <button>Connect Now</button>
                <img src="./images/connect.png" alt="" />
              </div>
            </div>
            <div className="landing_image">
              <img src="./images/landing.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
