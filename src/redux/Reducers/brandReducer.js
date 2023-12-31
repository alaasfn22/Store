import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../Type";

const intial = { allBrand: [], oneBrand: [], loading: true }
export const brandReducer = (state = intial, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                allBrand: action.payload,
                loading: false,
            }
        case CREATE_BRAND:
            return {
                allBrand: action.payload,
                loading: false,
            }
        case GET_ONE_BRAND:
            return {
                oneBrand: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                allBrand: action.payload,
                loading: true,
            }
        default:
            return state;
    }
}