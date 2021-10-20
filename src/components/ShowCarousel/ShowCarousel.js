import './ShowCarousel.css';
import { addShow } from '../../store/showFavorites/actions'
import { useDispatch } from 'react-redux'
import useData from '../../hooks/useData'

const ShowCarousel = () => {
  const shows = useData('shows')
  const dispatch = useDispatch()

  return (
    <div className="scroll-box">
      <div className="scroll-box__wrapper">
        <div className="scroll-box__container" role="list">
          {shows?.results?.map((item, i) => (
            <div className="scroll-box__item" role="listitem" key={`scroll-box-item-${i}`}>
                <div className='item-container'>
                  <h3 className='item-title'>{item.name}</h3>
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="poster"
                    className='show-poster'
                  />
                </div>
                <button onClick={() => dispatch(addShow(item))}>Add to Favorites</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowCarousel;
