import axios from "axios"

export const getstatususer= async (id_user, setdata)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/status/user",
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
            id_user: id_user
        }
    })
    const result= await res.data
    return setdata(()=> result[0])
}