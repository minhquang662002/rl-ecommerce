import axios from "axios"

export const edit_name_shop= async (id_shop, newname)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/edit/name/shop",
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
            id_shop: id_shop,
            newname: newname,
        }
    })
    const result= await res.data
    return console.log(result)
}