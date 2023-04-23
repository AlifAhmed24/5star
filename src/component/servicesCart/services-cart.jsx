import React from "react";
import "./services-cart.css";

function ServicesCart({icon, title, desc}) {
  return (
    <div className="serviceCart">
      <div className="servicesIcon">
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <h2>{title}</h2>
      <p>
        {desc}
      </p>
    </div>
  );
}

export default ServicesCart;
