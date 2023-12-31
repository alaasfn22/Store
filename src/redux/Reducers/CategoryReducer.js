import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../Type"

const intial = { allCategory: [], oneCategory: [], deleteCategory: [], loading: true }
export const categoryReducer = (state = intial, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                allCategory: action.payload,
                loading: false,
            }
        case CREATE_CATEGORY:
            return {
                allCategory: action.payload,
                loading: false,
            }
        case DELETE_CATEGORY:
            return {
                deleteCategory: action.payload,
                loading: false,
            }
        case GET_ONE_CATEGORY:
            return {
                oneCategory: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                allCategory: action.payload,
                loading: true,
            }
        default:
            return state;
    }
}