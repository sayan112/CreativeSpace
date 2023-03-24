import React from 'react'
 import "./CatCard.scss"
 import { Link } from 'react-router-dom'
const Catcard = ({item}) => {
  console.log(item.desc);
    console.log(item.img);
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="item-img" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default Catcard