import { MovieList, ShowList } from '../'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <div className='list'>
          <h2>Popular Movies</h2>
          <MovieList />
        </div>
        <div className='list'>
          <h2>Popular Shows</h2>
          <ShowList />
        </div>
    </div>
  );
}

export default Home;
