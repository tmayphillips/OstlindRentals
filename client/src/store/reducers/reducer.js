import * as actionTypes from '../actions/actionTypes'
import { connect } from 'react-dom'

const initialState = {
  users: '',
  properties: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.RENTAL_ID:
      return {
        ...state,
        rentalid: action.rentalid
      }
      case actionTypes.ADD_NEW_PROPERTY:
        return {
          ...state,
          properties: state.properties.concat(action.payload)
        }
  }
  return state
}

export default reducer
