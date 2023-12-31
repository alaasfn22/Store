import { CREATE_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORY } from "../Type"

const intial = { subCategory: [], loading: true }
export const subCategoryReducer = (state = intial, action) => {
    switch (action.type) {
        case GET_SUBCATEGORY:
            return {
                subCategory: action.payload,
                loading: false,
            }
        case CREATE_SUBCATEGORY:
            return {
                subCategory: action.payload,
                loading: false
            }
        case GET_ERROR:
            return {
                subCategory: action.payload,
                loading: true
            }
        default:
            return state;
    }
}