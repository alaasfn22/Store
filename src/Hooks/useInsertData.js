import { baseURL } from "../API/baseURL";

const useInsertData = async (url, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url, params, config);
    return res
}
const useInsertDataWithImg = async (url, params) => {
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url, params, config);
    return res
}

export { useInsertData, useInsertDataWithImg }