import React from 'react'
import './Banner.css'

function Banner() {
  function truncate(string, n) {
    return string?.lenght > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://cdn1.vectorstock.com/i/1000x1000/74/50/abstract-red-line-black-banner-on-hexagon-mesh-vector-22617450.jpg')`,
      }}
      className="banner"
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "Lorem ipsumolor sit amet lorem ipsum lor sit amet lorem ipsum dolor  lor sit amet lorem ipsum dolor    t amet lorem ipsum dolor sit amet ",
            150
          )}
        </h1>
        <div className="banner--fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner