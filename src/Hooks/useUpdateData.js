import { baseURL } from "../API/baseURL";

const useUpDatetData = async (url, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.put(url, params, config);
    return res
}
const useUpdateDataWithImg = async (url, params) => {
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.put(url, params, config);
    return res
}

export { useUpDatetData, useUpdateDataWithImg }