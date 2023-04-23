import React from "react";
import "./whyUsCart.css";

function WhyUsCart({title, desc}) {
  return (
    <div className="whyUsCart">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default WhyUsCart;
