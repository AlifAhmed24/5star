import React from 'react'
import './why-us.css'
import Tagline from './../../component/tagline/tagline';
import WhyUsCart from '../../component/whyUsCart/whyUsCart';

function WhyUs() {
  return (
    <div className="whyUs taglinePadding">
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
      <section className="whyUsSection">
        <div className="container">
          <div className="whyUsContent">
            <div className="title">
              <h1>Why Us</h1>
            </div>
            <div className="whyUsWrapper">
              <WhyUsCart 
                title='Our People'
                desc='Each of our staff members is professional, knowledgeable, and dedicated to carrying out their task efficiently.  All staff is in uniform which easily identifies them as a team member.  Our parking attendants help with parking making sure no one parks in a neighbor’s driveway or on the grass.  Our security staff is always alert, watching over your property making sure no one enters areas designated as ‘off limits’.  Our sales staff is knowledgeable, providing courteous help to our buyers.  Our delivery folks will carefully deliver large items to their new home.'
              />
              <WhyUsCart 
                title='Our accounting'
                desc='Many estate sale companies will only provide accounting for items that sold for over $100…if they provide accounting at all.  We provide a detailed accounting of your entire liquidation, showing each item and the amount it sold for.  This accounting will be provided to you along with a check for the proceeds of the sale within 10 business days after the sale.'
              />
              <WhyUsCart 
                title='Our On-site Sale'
                desc='We know how important merchandising is to a successful sale.  We have many years of experience in creating attention grabbing visuals when displaying your items.  As they say, “Presentation is Everything”.  When our customers stroll through your home, they will be greeted with visually appealing displays tempting them to make a purchase.  When they go to our check-out area, they discover an option to pay by credit or debit card and for large items they can utilize our delivery service.  We go the extra mile to make shopping at our estate sales a five-star experience.'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs