import axios from 'axios';
import { useEffect } from 'react';

export const getMovies = () => dispatch => {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

    // useEffect(() => {
    // axios
    //     .get(proxyurl + url, {
    //         headers: {
    //             Authorization: 'Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx',
    //         },
    //         params: {
    //             location: 'charlotte',
    //         },
    //     })
    //     .then(response => {
    //         dispatch({ type: 'FETCH_RESTAURANT_LIST', payload: response.data.businesses});
    //     })
    // }, [dispatch]);
};
