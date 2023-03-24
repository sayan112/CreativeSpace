import React, { useEffect, useState } from "react";
import "./Navbar.scss";
 import { Link } from "react-router-dom";
  import { useLocation } from "react-router-dom";
const Navbar = () => {
     const {pathname} = useLocation();
     const [active,setActive]=useState(false);
         const [open, setOpen] = useState(false);
      const isActive=()=>{
        window.scrollY>0 ? setActive(true):setActive(false);
      }
       const currentUser={
        id:1,
         username:"Sayan Maitra",
         isSeller:true
       }
      useEffect(()=>{
window.addEventListener("scroll" , isActive);
return ()=>{
    window.removeEventListener("scroll" , isActive)
}
      },[])
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="navlogo_text">CreativeSpace</span>
          </Link>
          <span className="navlogo_dot">.</span>
        </div>
        <div className="links">
          <span>CreativeSpace Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://media.istockphoto.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=612x612&w=0&k=20&c=scUAkj-WvWbzLvTM0auQuNEvsNdbni_Tws_QIXIR0UI="
                alt="img"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new Gigs
                      </Link>
                    </>
                  )}
                  <Link className="link" to="orders">
                    orders
                  </Link>
                  <Link className="link" to="Messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link">Graphics & Design</Link>
            <Link className="link">Video & Animation</Link>
            <Link className="link">Writing & Translation</Link>
            <Link className="link">Al Services</Link>
            <Link className="link">Digital Marketing</Link>
            <Link className="link">Music & Audio</Link>
            <Link className="link">Programming & Tech</Link>
            <Link className="link">Business</Link>
            <Link className="link">Lifestyle</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
