import axios from "axios"
import { fakesleep } from "../../../ListItem/ListItem"
import moment from "moment"

export const lockshopaccounttime = async (id_shop, setopensnackbar, valuetime)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v2/admin/decision/shop/lock/time",
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
            valuetime: moment(new Date(valuetime)).valueOf()
        }
    })
    const result= await res.data
    setopensnackbar(()=> true)
    await fakesleep(2000)
    setopensnackbar(()=> false)
    window.location.reload()
    return console.log(result)

}