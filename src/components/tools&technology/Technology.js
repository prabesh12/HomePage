import React from "react";
import TechnologyList from "./TechlologyList";
import "./Technology.scss";
const Technology = () => {
  return (
    <>
      <div className="container tools">
        <div className="technology_text">
          <p className="technology_used container">
            Tools & <span className="tech_span">Technologies</span>
            That We Use
          </p>
          <p className="make">
            WE MAKE <span>IT</span> HAPPEN
          </p>
          <p className="tech_description">
            101 Infotech utilizes high-quality technical tools such as
            WordPress, Laravel, CSS, Javascript, HTML My SQL, etc. in order to
            provide you better business solutions.
          </p>
        </div>
        <div className="right">
          <div className="d-flex flex-wrap">
            {TechnologyList.map((item) => {
              return (
                <div className="col-md-4 col-sm-12">
                  <div key={item.id} className="container"/>
                  <img className="tools_image" src={item.image} alt="" />
            
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
