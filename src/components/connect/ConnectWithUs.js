import React from "react";
import "./ConnectWithUs.scss";
const ConnectWithUs = () => {
  return (
    <>
      <div className="container-fluid" style={{ background: "#F1F3FE" }}>
        <div className="container connect">
          <div className="connect_text">
            <p className="connect_with_us">
              Connect with <span> Us</span>
            </p>
            <p className="connect_heading container">
              Make your <span> dream projects</span> on the best way possible
            </p>

            <p className="connect_description">
              Mean if he they been no hold mr. Is at much do made. Latter person
              am secure of estate genius at.
            </p>
          </div>

          <form className="container" onSubmit={{}}>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConnectWithUs;
