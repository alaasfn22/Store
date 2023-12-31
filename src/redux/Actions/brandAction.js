import { useGetData } from "../../Hooks/useGetData"
import { useInsertDataWithImg } from "../../Hooks/useInsertData"
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND } from "../Type"

// get all brand 
export const getBrand = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}`)
        dispatch({
            type: GET_ALL_BRAND,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}

// get one brand by id
export const getOneBrand = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands/${id}`)
        dispatch({
            type: GET_ONE_BRAND,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
// create (insert) brand 
export const createBrand = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg(`/api/v1/brands`, formData)
        dispatch({
            type: CREATE_BRAND,
            payload: res,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
// get  brand Page
export const getBrandPagination = (page, limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_BRAND,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}