import useDeleteData from '../../Hooks/useDeleteData'
import { useGetData } from '../../Hooks/useGetData'
import { useInsertDataWithImg } from '../../Hooks/useInsertData'
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from '../Type'
// get all category 
export const getCategory = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}`)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
export const getSearchCategory = (queryString) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?${queryString}`)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
//get one category by id
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}`)
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
// get  category Page
export const getCategoryPagination = (page, limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
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

export const deleteCategory = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/categories/${id}`);
        dispatch({
            type: DELETE_CATEGORY,
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
