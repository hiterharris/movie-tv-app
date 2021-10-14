import './MovieList.css'
import { addMovie } from '../../store/movieFavorites/actions'
import { useDispatch } from 'react-redux'
import useData from '../../hooks/useData'

const MovieList = () => {
  const movies = useData('movies')
  const dispatch = useDispatch()

  return (
    <div className="Movies">
      {movies?.results?.map((item, index) => {
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
