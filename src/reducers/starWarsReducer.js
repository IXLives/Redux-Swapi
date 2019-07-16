import {LOADING, LOADING_FAILURE, LOADING_SUCCESS} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case LOADING: {
      return {
        ...state,
        fetching: true
      }
    }
    case LOADING_FAILURE: {
       return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case LOADING_SUCCESS: {
      console.log(action.payload)
      const newCharacters = action.payload.results
      return {
        ...state,
        characters: newCharacters,
        fetching: false,
      }
    }
    default:
      return state;
  }
};
