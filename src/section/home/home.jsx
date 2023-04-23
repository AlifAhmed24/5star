import React from "react";
import "./home.css";
import {Link} from 'react-router-dom'
import { ReactComponent as Home1 } from "../../Assets/home/home-1.svg";
import { ReactComponent as Home2 } from "../../Assets/home/home2.svg";
import { ReactComponent as Home3 } from "../../Assets/home/home3.svg";
import { ReactComponent as Home4 } from "../../Assets/home/home4.svg";

function Home() {
  return (
    <div className="home-section">
      <Home1 className="home1" />
      <Home2 className="home2" />
      <Home3 className="home3" />
      <Home4 className="home4" />
      <div className="container">
      <div className="Home-content">
        <h1>
          Helping You Through Life’s Transitions <br /> and Funding the Next Chapter <br /> of
          Your Life.
        </h1>
        <div className="home-btn">
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
