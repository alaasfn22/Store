import useDeleteData from '../../Hooks/useDeleteData'
import { useGetData } from '../../Hooks/useGetData'
import { useInsertDataWithImg } from '../../Hooks/useInsertData'
import { useUpdateDataWithImg } from '../../Hooks/useUpdateData'
import { GET_ONEPRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_PRODUCT_LIKE, CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../Type'
// get all products 
export const getProduct = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
// get all search Products 
export const getSearchProduct = (queryString) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?${queryString}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
// get one product  by id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products/${id}`)
        dispatch({
            type: GET_ONEPRODUCT,
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
export const getProductPagination = (queryString) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?${queryString}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: res
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}
//get one product with id
export const getProductLike = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//create product 
export const createProduct = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImg(`/api/v1/products`, formData);
        dispatch({
            type: CREATE_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//delete product 
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//update product 
export const updateProduct = (id, formData) => async (dispatch) => {
    try {
        const response = await useUpdateDataWithImg(`/api/v1/products/${id}`, formData);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
