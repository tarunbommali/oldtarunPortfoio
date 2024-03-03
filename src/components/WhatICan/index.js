import React from "react";
import "./index.css";

function WhatICan() {
  return (
    <div className="what-i-can-container">
      <>
        <h1 className="section-title"> What I Can Do?</h1>
        <div className="section-active-container">
          <div className="service-carosule">
            <img
              src="https://res.cloudinary.com/drdgj0pch/image/upload/v1709432659/layers_hot6ee.png"
              alt="back"
              className="carosule-img"
            />
          </div>
          <div className="service-list">
            <div className="box">
              <img
                src="https://res.cloudinary.com/drdgj0pch/image/upload/v1709429628/coding_ly9rrl.png"
                alt="Web Design Icon"
                className="service-img"
              />
              <h2>Web Design</h2>
            </div>
            <div className="box">
              <img
                src="https://res.cloudinary.com/drdgj0pch/image/upload/v1709429618/property-contract_mqqc2h.png"
                alt="Smart Contract Icon"
                className="service-img"
              />
              <h2>Smart Contract</h2>
            </div>
            <div className="box">
              <img
                src="https://res.cloudinary.com/drdgj0pch/image/upload/v1709429604/backend_r1unj9.png"
                alt="Backend Icon"
                className="service-img"
              />
              <h2>Backend</h2>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default WhatICan;
