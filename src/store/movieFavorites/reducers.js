const initialState = {
    favorites: []
}

const movieFavorites = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case "REMOVE_MOVIE":
            return {
                favorites: [
                    ...state.favorites.filter(item => item !== action.payload)
                ]
            }
        default:
            return state
    }
}

export default movieFavorites



