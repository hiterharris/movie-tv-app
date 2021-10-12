import React, { useState, useEffect } from 'react'
import './MovieList.css';
import axios from 'axios'

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=727ef961992c940d049df733d71e6951&language=en-US&page=1')
    .then(res => {
      const data = res.data.results
      setMovies(data)
    })
  }, [0])

  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <div className='movie'>
              <h3>{movie.title}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
                className='poster'
              />
          </div>
        )
      })}
    </div>
  );
}

export default MovieList;
