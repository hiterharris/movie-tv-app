import React, { useState, useEffect } from 'react'
import './MovieList.css'
import axios from 'axios'
import { addMovie } from '../../store/movieFavorites/actions'
import { useDispatch } from 'react-redux'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=727ef961992c940d049df733d71e6951&language=en-US&page=1')
    .then(res => {
      const data = res.data.results
      setMovies(data)
    })
  }, [0])

  return (
    <div className="Movies">
      {movies.map((item, index) => {
        return (
          <div className='container' key={index}>
            <div>
              <h3>{item.title}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className='poster'
              />
            </div>
            <button onClick={() => dispatch(addMovie(item))}>Add to Favorites</button>
          </div>
        )
      })}
    </div>
  );
}

export default MovieList;
