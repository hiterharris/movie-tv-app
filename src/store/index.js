import { combineReducers } from 'redux';
import movieFavorites from "./movieFavorites/reducers";
import showFavorites from "./showFavorites/reducers";

const rootReducer = combineReducers({
	movies: movieFavorites,
    shows: showFavorites
})

export default rootReducer