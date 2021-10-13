import React, { useState, useEffect } from 'react'
import './ShowsList.css';
import axios from 'axios'

const ShowsList = () => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=727ef961992c940d049df733d71e6951&language=en-US&page=1')
    .then(res => {
      const data = res.data.results
      setShows(data)
    })
  }, [0])

  return (
    <div className="TV">
      {shows.map((show, index) => {
        return (
          <div className='show' key={index}>
              <h3>{show.name}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt="poster"
                className='poster'
              />
          </div>
        )
      })}
    </div>
  );
}

export default ShowsList;
