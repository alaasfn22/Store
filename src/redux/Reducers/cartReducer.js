import { ADD_TO_CART, CLEAR_ALL_CART, LOGGED_CART, REMOVE_SPECIFIC_CART, UPDATE_COUNTER_CART } from "../Type"

const initial = { addToCart: [], loggedCart: [], clearAll: [], removeSpecific: [], updateCount: [] }

export const cartReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, addToCart: action.payload }
        case LOGGED_CART:
            return { ...state, loggedCart: action.payload }
        case CLEAR_ALL_CART:
            return { ...state, clearAll: action.payload }
        case REMOVE_SPECIFIC_CART:
            return { ...state, removeSpecific: action.payload }
        case UPDATE_COUNTER_CART:
            return { ...state, updateCount: action.payload }
        default:
            return state
    }
}