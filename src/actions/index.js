// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const LOADING = 'LOADING'
export const LOADING_SUCCESS = 'LOADING_SUCCESS'
export const LOADING_FAILURE = 'LOADING_FAILURE'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function getCharacters() {
    return(dispatch) => {
        dispatch({type: LOADING})

        axios.get('https://swapi.co/api/people/')
        .then((res) => {
            dispatch({type: LOADING_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: LOADING_FAILURE, payload: err})
        })
    }
}