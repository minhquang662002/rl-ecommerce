import axios from "axios"

export const edit_name_user= async (id, newname)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/edit/name/user",
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
            id: id,
            newfirstname: newname?.trim()?.split(" ")[0],
            newlastname: newname?.trim()?.split(" ")[1]
        }
    })
    const result= await res.data
    return console.log(result)
}