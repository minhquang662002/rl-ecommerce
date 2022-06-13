import axios from "axios"

export const getstatusshop= async (id_shop, setdata)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/status/shop",
        method: "post",
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        data: {
            id_shop: id_shop
        }
    })
    const result= await res.data
    return setdata(()=> result[0])
}