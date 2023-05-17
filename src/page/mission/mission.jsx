import React, {useEffect} from "react";
import "./mission.css";
import Tagline from "../../component/tagline/tagline";
import Cart from "../../component/cart/cart";

function Mission() {
  useEffect(() => {
    document.title = 'Mission - Five Star Estate Liquidations ';
  }, [])

  return (
    <div className="mission taglinePadding">
      <Tagline />
      <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 1920 150`}
          preserveAspectRatio="xMinYMin slice"
        >
          <g style={{ opacity: 1 }}>
            <path
              d="M1920,1335H0V80.24c246.48,67.94,445.72,78.28,579,75.92,346.28-6.11,513-102.58,904-108.37a2471.29,2471.29,0,0,1,437,32.45Z"
              transform="translate(0 -47.52)"
              style={{ fill: "#f9f9ca" }}
            />
          </g>
        </svg>
      <section className="missionSection">
        <div className="container">
          <div className="missionContent">
          <div className="title">
        <h1>Our Mission</h1>
          {/* <p>There are several options available to you when liquidating your estate.  We research each item so we know the market value and based on our many years’ experience we can determine which sale environment is best suited for the item to maximize the selling price.  Some options available include:</p> */}
          </div>
          <div className="missionWrapper">
            <Cart
              icon="stress_management"
              title="We owe our clients a fiduciary duty of honesty and transparency."
            />
            <Cart
              icon="communication"
              title="To have clear and concise communications with our clients giving them realistic expectations."
            />
            <Cart
              icon="payments"
              title="To get the very best price for our client’s possessions."
            />
            <Cart
              icon="account_balance_wallet"
              title="To provide a complete and accurate accounting of the estate."
            />
            <Cart
              icon="star"
              title="To give each client the very best customer service – a true 5 star experience."
            />
           
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;
