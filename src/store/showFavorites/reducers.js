const initialState = {
    favorites: []
}

const showFavorites = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SHOW":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case "REMOVE_SHOW":
            return {
                favorites: [
                    ...state.favorites.filter(item => item !== action.payload)
                ]
            }
        default:
            return state
    }
}

export default showFavorites



