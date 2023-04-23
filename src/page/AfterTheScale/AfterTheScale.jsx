import React from 'react'
import './AfterTheScale.css'
import Tagline from '../../component/tagline/tagline'
import AfterScaleCart from '../../component/afterScale/afterScale'

function AfterTheScale() {
  return (
    <div className="afterScale taglinePadding">
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
              style={{ fill: "#94abff" }}
            />
          </g>
        </svg>
      <section className="afterScaleSection">
        <div className="container">
          <div className="afterScaleContent">
          <div className="title">
          <h1>After The Sale</h1>
          </div>
          <div className="afterScaleWrapper">
            <AfterScaleCart 
              title='After the Liquidation'
              desc='Usually there are a few items left after an on-site estate sale.  We have several dealers who we can call and invite in to give us a bid on everything left.  Ninety nine percent of the time a dealer will give us an acceptable bid and they take everything left.  In the unlikely event we cannot secure an acceptable bid for those leftovers, we will remove those and donate them to a charity and provide you with a tax-deductible receipt.  We then will remove all our equipment and leave the house “broom” clean.'
            />
            <AfterScaleCart 
              title='Settlement'
              desc='Within ten (10) business days after the closing of an on-site sale, we will provide you a detailed accounting of all the items sold during the sale and enclose a check to you for the proceeds.  If there are items that are out-sourced to auctions or consignments, we will settle with you within ten (10) business days after their successful sale.'
            />
            <AfterScaleCart 
              title='Realtor Services'
              desc='We can offer the services of a Realtor as our owner is a licensed real estate agent.  If your house needs some minor repairs, we can take care of those by utilizing one of our many preferred contractors within our extended network bringing up your listing price.  Another service we offer is that of “staging”.  Data has shown that homes ‘staged’ properly bring a significantly higher offer than empty houses.'
            />
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AfterTheScale