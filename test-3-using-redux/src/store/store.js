import { createStore, applyMiddleware } from "redux"
import RootReducer from "../reducers/RootReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const initialState = {}
const middleware = [thunk]
const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
