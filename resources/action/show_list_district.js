import axios from "axios"

export const showlistdistrict= async (setDistrict, query, p_id)=> {
    const res= await axios({
        url: "http://localhost:8000/list/address",
        method: "get",
        timeout: 10000,
        timeoutErrorMessage: "Time out login",
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
        xsrfHeaderName: 'X-CSRF-TOKEN',
        withCredentials: false,
        validateStatus: (status)=> {
            return status >= 200 && status < 300
        },
        maxRedirects: 10,
        responseType: "json",
        params: {
            query_string: query,
            p_id: p_id
        }
    })
    const result= await res.data
    return setDistrict(result)
}   