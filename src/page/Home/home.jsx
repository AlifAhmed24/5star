import React, {useState, useEffect} from "react";
import "./home.css";
import aboutOne from "../../Assets/home/about1.png";
import aboutTwo from "../../Assets/home/about2.png";
import HomeSlider from '../../section/home-slider/home.jsx'
import newRequest from './../../utils/newRequest';

function About() {
  const [newsletterInfo, setNewsletterInfo] = useState({
    name:"",
    email:""
  });

  useEffect(() => {
    document.title = 'Home - Five Star Estate Liquidations ';
  }, [])

  
  function handleChange(ev){
    const {value, name} = ev.target
    setNewsletterInfo(prev => {
      return {...prev, [name]: value}
    })
  }

  async function handleSubmit(ev){
      ev.preventDefault();
      try{
        newRequest.post('/api/newsletter', newsletterInfo)
        setNewsletterInfo({
          name: "",
          email: "",
        });
      }catch(error){
        console.log(error)
      }
  }

  return (
    <>
    <HomeSlider />
    <div className="aboutUs">
      <div className="homeWrapper">
        <div className="container">
          <div className="homeOne">
            <img src={aboutOne} alt="" />
            <p>
              <b>Let us transition your treasures.</b> <br />
              Life presents us with many changes – relocation, divorce,
              marriage, downsizing, foreclosure, or the passing of a loved one.
              These changes can take a toll on the best of us.
              <br />
              <br />
              Five Star Estate Liquidations will alleviate your stress dealing
              with life’s challenges. We are a service-oriented, professional,
              and trusted company delivering exceptional sales results for our
              clients. We provide our services to modest homes as well as luxury
              estates in a 35-county area in Tennessee. We are a multi-service
              liquidation company providing on-site estate sales, auction house
              placement, internet auctions, consignment services and estate
              buy-out to accommodate homeowners, family members, attorneys, tax
              consultants and estate planners.
            </p>
          </div>
        </div>
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
              style={{ fill: "#f7f7db" }}
            />
          </g>
        </svg>
        <div className="homeTwo">
          <div className="container">
            <div className="homeTwoWrapper">
              <p>
                Our comprehensive marketing efforts include utilizing the latest
                technology to promote your estate sale maximizing the buyer
                traffic. Included in our marketing efforts are a mass email
                notification to buyers who have asked to be notified of estate
                sales in your area. We also place advertising on social media
                like Facebook Marketplace, Twitter and other sites that promote
                estate sales.
                <br /> <br />
                We will make every effort to minimize your stress. Our staff
                will work with you in a professional and caring manner to
                simplify this process.
                <br /> <br />
                We know this is a challenging time for you and our attention to
                details and our commitment to making your sale a huge success
                will insure your peace of mind. Rest assured you have found a
                company who can handle everything, and you won’t have to lift a
                finger. We will treat your estate and your home with great
                pride…as if it were our own. You will find our reputation above
                reproach.
                <br />
                <br />
                Our consultations are free and there is no up-front cost
              </p>

              <img src={aboutTwo} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="newsletter">
            <div className="newsletterWrapper">
              <h3>Get Notified About Upcoming Estate Sales</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={newsletterInfo.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  onChange={handleChange}
                  value={newsletterInfo.email}
                />
                <button>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
