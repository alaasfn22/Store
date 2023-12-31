import { GET_ONEPRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_PRODUCT_LIKE, CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../Type";

const intial = { allProduct: [], oneProduct: [], productLike: [], productDeleted: [], updateProduct: [], loading: true }
export const productReducer = (state = intial, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
                loading: false,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
                loading: false,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                productDeleted: action.payload,
                loading: false,
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload,
                loading: false,
            }
        case GET_ONEPRODUCT:
            return {
                oneProduct: action.payload,
                loading: false,
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                allProduct: action.payload,
                loading: true,
            }
        default:
            return state;
    }
}