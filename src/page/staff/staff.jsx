import React from 'react'
import './staff.css'
import Tagline from '../../component/tagline/tagline'
import StaffCart from '../../component/staff-cart/staff-cart'
import OwnerCart from '../../component/ownerCart/ownerCart'

function Staff() {
  return (
    <div className="staff taglinePadding">
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
            style={{ fill: "#b7c6fd" }}
          />
        </g>
      </svg>
      <section className="contentSection">
        <div className="container">
          <div className="staffContent">
            <div className="title">
              <h1>Our Staff</h1>
              {/* <p>There are several options available to you when liquidating your estate.  We research each item so we know the market value and based on our many years’ experience we can determine which sale environment is best suited for the item to maximize the selling price.  Some options available include:</p> */}
            </div>
            <div className="staffWrapper">
              <OwnerCart />
              <StaffCart
                icon="sell"
                title="Sales Staff "
                desc="Well Informed, courteous and friendly, we offer the buyers a pleasant experience."
              />
              <StaffCart
                icon="account_balance"
                title="Accounting Staff"
                desc="We maintain control over pricing and offer a detailed account of each item sold."
              />

              <StaffCart
                icon="preliminary"
                title="Crowd Control Staff "
                desc="We make sure off-limits areas are preserved and admittance limits are maintained."
              />

              <StaffCart
                icon="verified_user"
                title="Security Staff"
                desc="We ensure the safety of our customers and the security of your property."
              />

              <StaffCart
                icon="local_parking"
                title="PARKING ATTENDANTS"
                desc="We want to ensure no one blocks a neighbor’s driveway or parks on the grass."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Staff