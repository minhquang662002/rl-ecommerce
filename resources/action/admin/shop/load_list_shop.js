import axios from "axios"
import { fakesleep } from "../../../ListItem/ListItem"

export const load_list_shop= async (setloading, setdata)=> {
    setloading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/shop",
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