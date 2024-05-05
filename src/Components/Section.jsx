import React from "react";
import { FaPlayCircle } from "react-icons/fa";

function Section() {
  return (
    <>
      <section>
        <h1 className="title1">DISCOVER AFRICA'S</h1>
        <h1 className="title2">WONDERS WITH US</h1>

        <p className="words">
          A safari is a journey. In the broadest sense, to <br />
          go on safari is simply to travel. More specifically, <br />a safari is
          a journey that involve.
        </p>
        <div className="btn-wrapper">
          <button className="see-btn">See Pricing</button>
          <div className="play-btn">
            <FaPlayCircle style={{ color: 'white', backgroundColor: 'transparent' }} />
            <button className="video-btn">Play Video</button>
          </div>
        </div>
        <div className="rating">
        <div className='stars'>
            <img src="/Images/Stars image.png" alt="" width="70" height="30" /></div>
            <p className='review'>4.9/5 ratings on google</p>
        </div>
      </section>
    </>
  );
}

export default Section;
