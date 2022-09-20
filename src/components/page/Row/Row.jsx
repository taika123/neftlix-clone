import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Row.css'


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovie] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
            setMovie(request.data.results)
            return request;
        }

        fetchData()
    }, [fetchUrl])

    // console.log(movies)
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Row