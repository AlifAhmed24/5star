import React from "react";
import "./staff-cart.css";

function StaffCart({icon, title, desc}) {
  return (
    <div className="StaffCart">
      <div className="icon">
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default StaffCart;
