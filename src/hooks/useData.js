import { useState, useEffect } from "react";

const url = (module) => {
    let endpoint = ''
    if (module === 'movies') endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    if (module === 'shows') endpoint = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    return endpoint;
}

function useData(module) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url(module))
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, [0]);
    return data;
  }

  export default useData
