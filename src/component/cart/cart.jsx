import React from "react";
import "./cart.css";
import { ReactComponent as Transparency } from "../../Assets/mission/transparency.svg";

function Cart({ icon, title }) {
  return (
    <div className="cart">
      <div className="icon">
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Cart;
