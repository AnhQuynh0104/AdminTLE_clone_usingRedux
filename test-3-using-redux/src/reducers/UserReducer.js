import * as types from "../constants/UserConstants"

const initialState = []
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return action.payload
    case types.ADD_USER:
      return [...state, action.payload]
    case types.EDIT_USER:
      const index = state.findIndex((item) => item.id === action.payload.id)
      const finalDataPut = [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ]
      return finalDataPut
    case types.DELETE_USER:
      return state.filter((user) => user.id !== action.payload)
    default:
      return state
  }
}

export default UserReducer
