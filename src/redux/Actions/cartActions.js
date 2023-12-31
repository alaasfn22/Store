import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData"
import { useUpDatetData } from "../../Hooks/useUpdateData";
import { ADD_TO_CART, CLEAR_ALL_CART, LOGGED_CART, REMOVE_SPECIFIC_CART, UPDATE_COUNTER_CART } from "../Type"

//when add product to cart
export const addProductToCart = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/cart`, body);

        dispatch({
            type: ADD_TO_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_TO_CART,
            payload: e.response,
        })
    }
}
export const getAllLoggedCart = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/cart`);
        // console.log(response)
        dispatch({
            type: LOGGED_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: LOGGED_CART,
            payload: e.response,
        })
    }
}
export const clearAllLoggedCart = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart`);
        // console.log(response)
        dispatch({
            type: CLEAR_ALL_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CLEAR_ALL_CART,
            payload: e.response,
        })
    }
}
export const removespecificCart = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${id}`);
        // console.log(response)
        dispatch({
            type: REMOVE_SPECIFIC_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: REMOVE_SPECIFIC_CART,
            payload: e.response,
        })
    }
}
export const updateCounter = (id, body) => async (dispatch) => {
    try {
        const response = await useUpDatetData(`/api/v1/cart/${id}`, body);
        // console.log(response)
        dispatch({
            type: UPDATE_COUNTER_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: UPDATE_COUNTER_CART,
            payload: e.response,
        })
    }
}