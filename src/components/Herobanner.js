import React from "react";
import Form from "./Form";
function Herobanner() {
  return (
    <div className="herobanner-wrapper">
      <div className="herobanner">
        <h1 className="hero-h1">More than just shorter Links</h1>
        <p className="hero-p">
          {" "}
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        {/* <img src={cartoon} /> */}
      </div>
      <Form />
    </div>
  );
}

export default Herobanner;
