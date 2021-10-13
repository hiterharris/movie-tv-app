export const addMovie = item => ({
    type: "ADD_MOVIE",
    payload: item
})

export const removeMovie = item => ({
    type: "REMOVE_MOVIE",
    payload: item
})