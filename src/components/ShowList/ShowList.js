import './ShowList.css';
import { addShow } from '../../store/showFavorites/actions'
import { useDispatch } from 'react-redux'
import useData from '../../hooks/useData'

const ShowList = () => {
  const shows = useData('shows')
  const dispatch = useDispatch()

  return (
    <div className="TV">
      {shows?.results?.map((item, index) => {
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

export default ShowList;
