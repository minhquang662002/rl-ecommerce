import axios from "axios"

export const execute_order= async (id_order, exe)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v1/order",
        method: 'post',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        data: {
            id_order, exe
        }
    })
    const result= await res.data
    return console.log(result)
}