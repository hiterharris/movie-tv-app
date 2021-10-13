import React, { useState, useEffect } from 'react'
import './ShowsList.css';
import axios from 'axios'
import { addShow } from '../../store/showFavorites/actions'
import { useDispatch } from 'react-redux'

const ShowsList = () => {
  const [shows, setShows] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=727ef961992c940d049df733d71e6951&language=en-US&page=1')
    .then(res => {
      const data = res.data.results
      setShows(data)
    })
  }, [0])

  return (
    <div className="TV">
      {shows.map((item, index) => {
        return (
          <div className='container' key={index}>
            <div>
              <h3>{item.name}</h3>
              <img 
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className='poster'
              />
            </div>
            <button onClick={() => dispatch(addShow(item))}>Add to Favorites</button>
          </div>
          
        )
      })}
    </div>
  );
}

export default ShowsList;
