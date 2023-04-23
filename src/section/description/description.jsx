import React from "react";
import "./description.css";
import DescriptionImg from "../../Assets/description/description.png";

function Description() {
  return (
    <div className="container">
      <div className="description">
        <img src={DescriptionImg} alt="desc" />
        <p>
          <b>Let us transition your treasures.</b> <br /> Life presents us with
          many changes – relocation, divorce, marriage, downsizing, foreclosure,
          or the passing of a loved one. These changes can take a toll on the
          best of us. <br />  Five Star Estate Liquidations will alleviate your stress
          dealing with life’s challenges. We are a service-oriented,
          professional, and trusted company delivering exceptional sales results
          for our clients. We provide our services to modest homes as well as
          luxury estates in a 35-county area in Tennessee. We are a
          multi-service liquidation company providing on-site estate sales,
          auction house placement, internet auctions, consignment services and
          estate buy-out to accommodate homeowners, family members, attorneys,
          tax consultants and estate planners. <br /> Our comprehensive marketing
          efforts include utilizing the latest technology to promote your estate
          sale maximizing the buyer traffic. Included in our marketing efforts
          are a mass email notification to buyers who have asked to be notified
          of estate sales in your area. We also place advertising on social
          media like Facebook Marketplace, Twitter and other sites that promote
          estate sales. <br /> We will make every effort to minimize your stress. Our
          staff will work with you in a professional and caring manner to
          simplify this process. We know this is a challenging time for you and
          our attention to details and our commitment to making your sale a huge
          success will insure your peace of mind. Rest assured you have found a
          company who can handle everything, and you won’t have to lift a
          finger. We will treat your estate and your home with great pride…as if
          it were our own. You will find our reputation above reproach. Our
          consultations are free and there is no up-front cost.
        </p>
      </div>
    </div>
  );
}

export default Description;
