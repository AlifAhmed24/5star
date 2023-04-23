import React from "react";
import "./ownerCart.css";
import owner from "../../Assets/owner/Ron.jpg";

function OwnerCart() {
  return (
    <div className="ownerCart">
      <div className="ownerPhoto">
        <img src={owner} alt="owner" />
      </div>
      <h1>Ron Fields</h1>
      <p>
        We have a staff of ultimate professionals experienced in estate
        liquidation consulting, consigning and auctions led by the owner, <b>Ron
        Fields.</b> Each member of our team will be in uniform which easily
        identifies them as staff. In addition, we have a vast network of
        appraisers and accessors who we can bring in for unique items.{" "}
      </p>
    </div>
  );
}

export default OwnerCart;
