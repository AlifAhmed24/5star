import React, {useEffect} from "react";
import "./rates.css";
import Tagline from "./../../component/tagline/tagline";
import ratesImg from '../../Assets/rates/rates.jpg'

function Rates() {
  useEffect(() => {
    document.title = 'Rates - Five Star Estate Liquidations ';
  }, [])

  return (
    <div className="rates taglinePadding">
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
            style={{ fill: "#fff" }}
          />
        </g>
      </svg>
      <section className="ratesSection">
        <div className="container">
          <div className="ratesContent">
            <div className="title">
              <h1>Our Rates</h1>
              {/* <p>There are several options available to you when liquidating your estate.  We research each item so we know the market value and based on our many years’ experience we can determine which sale environment is best suited for the item to maximize the selling price.  Some options available include:</p> */}
            </div>
            <div className="ratesWrapper">
              <div className="ratesImg">
                <img src={ratesImg} alt='rates' />
              </div>
              <p>
                We take a percentage of the total receipts. The rate varies from 
                <b> 35 to 50 percent </b> depending on several factors including the size
                and contents of your estate. We will evaluate your estate during
                our free consultation and come to an agreement on the services
                we will provide and the rate. Our contract puts everything in
                writing so there is no misunderstanding regarding any aspect of
                your estate liquidation. Remember, there are no up-front fees,
                and the consultation is free. <br/> <br/> A word about the expenses involved
                in liquidating an estate. <br />There can be quite a lot of expense
                involved in liquidating an estate. The cost of advertising, the
                professional signage, the merchant fees on credit or debit cards
                and the labor cost names just a few. We cover all the expenses
                out of our percentage except for the cost of staff. That expense
                is deducted from the gross proceeds before the commission split.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rates;
