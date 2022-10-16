import React from "react";
import "./marketingsidenav.css";

const Marketingsidenav = () => {
  return (
    <div
      className="Marketingsidenav"
      style={{
        display: "flex",
        position: "relative",
        left: "300px",
        top: "300px"
      }}
    >
      <div className="CircleLeft">
        <img src="/assets/images/Marketing.png" alt="error" />
        <img
          style={{ position: "relative", left: "-34px" }}
          src="/assets/SvgNav/Vector-58.svg"
          alt="error"
        />
      </div>
      <div style={{ marginLeft: "5px" }}>
        <div className="spanmarketing">MARKETING</div>
        <div style={{ width: "60%" }}>
          We've created the marketing campaign for the website it was a very
          interesting collaboration.
        </div>
      </div>
    </div>
  );
};

export default Marketingsidenav;
