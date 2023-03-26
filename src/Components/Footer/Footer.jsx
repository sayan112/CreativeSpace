import React from 'react'
import "./Footer.scss"
 import fbimg from "../../img/facebook.png";
  import linkdinimg from "../../img/linkedin.png";
  import pinterestimg from "../../img/pinterest.png";
  import twitterimg from "../../img/twitter.png";
  import instagramimg from "../../img/instagram.png";
 import coin from "../../img/coin.png";
  import accessibility from "../../img/accessibility.png";
   import language from "../../img/language.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Programming & Tech</span>
            <span>Community Hub</span>
            <span>Influencers</span>
            <span>Forum</span>
            <span>Event</span>
            <span>Blog</span>
          </div>
          <div className="item">
            <h2>CreativeSpace Business</h2>
            <span>CreativeSpace Juice & drinks</span>
            <span>CreativeSpace Coffee & Chai</span>
            <span>CreativeSpace Logo maker</span>
            <span>CreativeSpace Thumbnail</span>
            <span>Learn & Make With Us :)</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Creative Space</h2>
            <span>© CreativeSayan International Ltd.</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={fbimg} alt="img" />
              <img src={linkdinimg} alt="img" />
              <img src={twitterimg} alt="img" />
              <img src={pinterestimg} alt="img" />
              <img src={instagramimg} alt="img" />
            </div>
            <div className="link">
              <img src={language} />
              <span>English</span>
            </div>
            <div className="link">
              <img src={coin} />
              <span>USD</span>
            </div>
            <div className="link">
              <img src={accessibility} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer