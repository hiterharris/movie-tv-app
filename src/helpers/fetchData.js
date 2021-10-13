const url = (module) => {
    let endpoint = ''
    if (module === 'movies') endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    return endpoint;
}

export const fetchData = (module) => {
    const movies = []
    fetch(url(module))
        .then(response => response.json())
        .then(data => {
            movies.push(data)
            console.log(movies)
        })
        .catch(error => console.log(error));
}


// import axios from 'axios'

// const fetchData = () => {
//     let movies = []
//     axios.get('https://api.themoviedb.org/3/movie/popular?api_key=727ef961992c940d049df733d71e6951&language=en-US&page=1')
//         .then(res => {
//             const data = res.data.results
//             movies.push(data)
//             console.log('movies: ', movies)
//         })
//     return movies
// }

// export { fetchData }

