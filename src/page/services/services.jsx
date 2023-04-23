import React, { useState, useEffect } from "react";
import Tagline from "../../component/tagline/tagline";
import "./services.css";
import Bg from "../../component/bg";
import ServicesCart from "../../component/servicesCart/services-cart.jsx";

function Services() {
  return (
    <div className="services taglinePadding">
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
              style={{ fill: "#f3f3f3" }}
            />
          </g>
        </svg>
      <section className="servicesContentSection">
        <div className="container">
          <div className="serviceContent">
          <div className="title">
          <h1>Our Services</h1>
          {/* <p>There are several options available to you when liquidating your estate.  We research each item so we know the market value and based on our many years’ experience we can determine which sale environment is best suited for the item to maximize the selling price.  Some options available include:</p> */}
          </div>
          <div className="servicesWrapper">
            <ServicesCart
              icon="shopping_cart"
              title="Estate Buy-Out"
              desc="You may need to make the estate settlement process quick.  We can make an offer for your entire 
                    estate.  This process is the quickest way to liquidate your estate."
            />
            <ServicesCart
              icon="sell"
              title="On-site Estate Sale "
              desc="Usually conducted over a 3- or 4-day period.  We bring in all the professionals to ensure a safe and successful sale.  We thoroughly research your items and price them at a fair market value for a quick sale. We will organize and arrange your items creating displays that best showcase your possessions.  We accept debit and credit cards to make shopping more convenient for buyers."
            />
            <ServicesCart
              icon="photo"
              title="Online Auction "
              desc="Some items may bring more if offered in an online-auction format such as ebay, etsy, marketplace and other online formats.  We take professional photographs of the item to ensure it is presented in the best possible light"
            />
            <ServicesCart
              icon="home"
              title="Local Auction Houses  "
              desc="STo maximize the sale price of some unique items, a local auction house may be the best option.  We work with several local auctions, and we know which house would likely produce the highest selling price.  We handle everything including negotiating lower fees, packing and transporting the item to the auction.
"
            />
            <ServicesCart
              icon="roofing"
              title="Consignment "
              desc="We have many retail partners with varied specialties where we can place your item in their store on consignment.
These are some options available to you and we are ready to discuss them in detail during our free consultation. We will come to your home and evaluate your estate and go over all the options available to you along with complete details of each option…this way you are completely informed and can make the best decision for you and your family.
Take the first step today and request a free consultation.

"
            />
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
