import axios from "axios"
import { fakesleep } from "../../../ListItem/ListItem"

export const unlockshop = async (id_shop, setopensnackbar)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v2/admin/decision/shop/unlock",
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
        }
    })
    const result= await res.data
    setopensnackbar(()=> true)
    await fakesleep(2000)
    setopensnackbar(()=> false)
    window.location.reload()
    return console.log(result)

}