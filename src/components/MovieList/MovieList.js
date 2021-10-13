import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import './MovieList.css';
import axios from 'axios'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const movies2 = useSelector(state => state.movies)
  console.log(movies2)

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=727ef961992c940d049df733d71e6951&language=en-US&page=1')
    .then(res => {
      const data = res.data.results
      setMovies(data)
    })
  }, [0])

  return (
    <div className="Movies">
      {movies.map((movie, index) => {
        return (
          <div className='movie' key={index}>
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
