import {
  ADD_PLACE,
  DELETE_PLACE,
} from '../actions/actionTypes'

import placeImage from '../../assets/beautiful-bg.jpg';

const initialState = {
  places: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE: 
      return {
        ...state,
        places: state.places.concat({ 
          key: Math.random().toString(), 
          name: action.payload, // payload is place name
          image: placeImage
        })
      }
    case DELETE_PLACE: 
      return {
        ...state,
        places: state.places.filter( place => place.key !== action.payload )
      }
    default: return state
  }
}

export default reducer