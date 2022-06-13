import axios from "axios"
import { fakesleep } from "../../../ListItem/ListItem"

export const load_detail_shop= async (setloading, setdata, id_shop)=> {
    setloading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:8000/api/v1/admin/shop/detail",
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
    setloading(()=> false)
    const result= await res.data
    return setdata(()=> result)
}