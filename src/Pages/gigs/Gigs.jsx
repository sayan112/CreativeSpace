import React, { useEffect, useState } from "react";
import "../gigs/Gigs.scss";
import down from "../../img/down.png";
import { gigs } from "../../Data";
import GigCard from "../../Components/GigCard/GigCard";
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          CreativeSpace {">"} Graphics {">"}
        </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technologies</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min"></input>
            <input type="text" placeholder="max"></input>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src={down}
              alt="img"
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span
                    onClick={() => {
                      reSort("createdAt");
                    }}
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      reSort("sales");
                    }}
                  >
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
