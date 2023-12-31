import { useInsertData } from "../../Hooks/useInsertData";
import { useUpDatetData } from "../../Hooks/useUpdateData";
import { CREATE_NEW_USER, FORGET_PASSWORD, LOGIN_USER, RESET_PASSWORD, VERIFY_CODE } from "../Type";

// create new user
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response
        })
    }
}
// create new user
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true,
        })
    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response
        })
    }
}
//1-foregt  passwrod 
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type: FORGET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response,
        })
    }
}
//1-verify  passwrod 
export const verifyCode = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
        dispatch({
            type: VERIFY_CODE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: VERIFY_CODE,
            payload: e.response,
        })
    }
}


//2-reset  passwrod 
export const resetPassword = (data) => async (dispatch) => {
    try {
        const response = await useUpDatetData(`/api/v1/auth/resetPassword`, data);
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        })
    }
}