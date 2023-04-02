import React from 'react'
import "./GigCard.scss"
 import star  from "../../img/star.png"
 import { Link } from 'react-router-dom'
  import heart from "../../img/heart.png"
const GigCard = ({item}) => {
  return (
    <Link to="/gig/234" className='link'>
      <div className="gigCard">
        <img src={item.img} alt="img" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src={star} alt="img" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src={heart} alt="img" />
          <div className="price">
            <span>SARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GigCard