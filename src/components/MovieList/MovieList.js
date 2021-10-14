import './MovieList.css'
import { addMovie } from '../../store/movieFavorites/actions'
import { useDispatch } from 'react-redux'
import useData from '../../hooks/useData'

const MovieList = () => {
  const movies = useData('movies')
  const dispatch = useDispatch()

    return (
      <div className="scroll-box">
        <div className="scroll-box__wrapper">
          <div className="scroll-box__container" role="list">
            {movies?.results?.map((item, i) => (
              <div className="scroll-box__item" role="listitem" key={`scroll-box-item-${i}`}>
                  <div className='item-container'>
                    <h3 className='item-title'>{item.title}</h3>
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="poster"
                      className='movie-poster'
                    />
                  </div>
                  <button onClick={() => dispatch(addMovie(item))}>Add to Favorites</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default MovieList;
