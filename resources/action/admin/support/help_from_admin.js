import axios from "axios"
import { fakesleep } from "../../../ListItem/ListItem"

export const help_from_admin= async (setdata, setloading)=> {
    setloading(()=> true)
    await fakesleep(1750)
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/help/user",
        method: "post",
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
    })
    setloading(()=> false)
    const result= await res.data
    return setdata(()=> result)
}