import React from 'react'
import './FavoritesList.css';
import { useDispatch, useSelector } from 'react-redux'
import { removeMovie } from '../../store/movieFavorites/actions';
import { removeShow } from '../../store/showFavorites/actions';

const FavoritesList = () => {
  const movieFavorites = useSelector(state => state.movies.favorites)
  const showFavorites = useSelector(state => state.shows.favorites)
  const dispatch = useDispatch()
  return (
    <div className="Favorites">
      <div className='favorite-type'>
        <p className='list-title'>Movies</p>
        {movieFavorites?.map((item, index) => {
        return (
          <div className='favorites-container' key={index}>
            <div>
              <h3>{item.title}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className='favorites-poster'
              />
            </div>
            <button onClick={() => dispatch(removeMovie(item))}>Remove</button>
          </div>
        )
      })}
      </div>
      <div className='favorite-type'>
        <p className='list-title'>Shows</p>
        {showFavorites?.map((item, index) => {
        return (
          <div className='favorites-container' key={index}>
            <div>
              <h3>{item.name}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className='favorites-poster'
              />
            </div>
            <button onClick={() => dispatch(removeShow(item))}>Remove</button>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default FavoritesList;
