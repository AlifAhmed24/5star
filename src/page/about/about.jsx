import React from 'react'
import './about.css'
import Tagline from '../../component/tagline/tagline'
import RonImg from '../../Assets/owner/Ron.jpg'

function About() {
  return (
    <div className="about taglinePadding">
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
      <section className="aboutSection">
        <div className="container">
          <div className="aboutContent">
            <div className="aboutWrapper">
              <div className="aboutImg">
                <img src={RonImg} alt="Ron" />
              </div>
              <div className="aboutinfo">
                <h1>About Us</h1>
                <p>
                  You will find the staff at Five Star Estate Liquidations very
                  professional and experienced…led by the owner, <b>Ron Fields. </b>
                   With an extensive background in antiques and collectables, our
                  company knows how to market a wide range of estate items to
                  maximize the sales price. However, we don’t know everything,
                  and, in those cases, we have dozens of certified appraisers
                  within our extended network who are always happy and ready to
                  help. We are licensed and insured, and we think of ourselves
                  as a fiduciary, so we maintain tight control of the process of
                  liquidating your estate. You can rest assured you have placed
                  your estate in very capable and caring hands when you hire
                  Five Star Estate Liquidators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About