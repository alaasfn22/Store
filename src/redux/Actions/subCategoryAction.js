import { useGetData } from "../../Hooks/useGetData"
import { useInsertData } from "../../Hooks/useInsertData"
import { CREATE_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORY } from "../Type"


// create action to save new sub
export const creatSubCategory = (data) => async (dispatch) => {

    try {
        const res = await useInsertData(`/api/v1/subcategories`, data)
        dispatch({
            type: CREATE_SUBCATEGORY,
            payload: res
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }
}
// get subCat by id 
export const getSubCatById = (id) => async (dispatch) => {

    try {
        const res = await useGetData(`/api/v1/categories/${id}/subcategories`)
        dispatch({
            type: GET_SUBCATEGORY,
            payload: res
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }
}