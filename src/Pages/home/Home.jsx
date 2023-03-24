import React from 'react'
import "./Home.scss"
 import Featured from '../../Components/Featured/Featured';
  import Trustedby from '../../Components/TrustedBy/Trustedby';
import Slide from '../../Components/Slide/Slide';
import { cards } from '../../Data';
import Catcard from '../../Components/catCard/catCard';
 import check from "../../img/check.png";
const Home = () => {
  return (
    <>
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={2}>
        {cards.map((card) => (
          <Catcard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="checkpng" />
              The best of every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="checkpng" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src={check} alt="checkpng" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src={check} alt="checkpng" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
              autoplay
              poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home