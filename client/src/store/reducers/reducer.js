import * as actionTypes from '../actions/actionTypes'
import { connect } from 'react-dom'

const initialState = {
  users: '',
  rentalid: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.RENTAL_ID:
      return {
        ...state,
        rentalid: action.rentalid
      }
  }
  return state
}

export default reducer
