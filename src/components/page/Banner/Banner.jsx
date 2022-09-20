import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../../../api/requests';
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(()=> {
    async function fetchData() {
        const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetlixOriginals}`)

        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            )
            return request;
    }
    
    fetchData();
  },[])

//   console.log(movie);

  function truncate(string, n) {
    return string?.lenght > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
      className="banner"
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview,150)}
        </h1>
        <div className="banner--fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner