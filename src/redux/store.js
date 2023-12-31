import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducers/rootReducer'

const middelware = [thunk]
export const store = createStore(rootReducer, applyMiddleware(...middelware))