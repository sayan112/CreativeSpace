import React from 'react'
import "./Featured.scss"
import man from "../../../src/img/man.png"
import search from "../../../src/img/search.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business</h1>
          <div className="search">
            <div className="serachInput">
              <img src={search} alt="img" />
              <input type="text" placeholder="Try builiding a mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className='right'>
            <img src={man} alt="img"/>
        </div>
      </div>
    </div>
  );
}

export default Featured