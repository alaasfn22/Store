import { CREATE_NEW_USER, FORGET_PASSWORD, LOGIN_USER, RESET_PASSWORD, VERIFY_CODE } from "../Type"

const intial = { createUser: [], login: [], forgetPassword: [], verifyCode: [], resetPassword: [], loading: true }
export const authReducer = (state = intial, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
                loading: false
            }
        case LOGIN_USER:
            return {
                ...state,
                login: action.payload,
                loading: false
            }
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
                loading: false
            }
        case VERIFY_CODE:
            return {
                ...state,
                verifyCode: action.payload,
                loading: false
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
                loading: false
            }
        default:
            return state;
    }

}