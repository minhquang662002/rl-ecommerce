import axios from "axios"
import { fakesleep } from "../../../ListItem/ListItem"
import moment from "moment"

export const lockaccounttime = async (id_user, setopensnackbar, valuetime)=> {
    const res= await axios({
        url: "http://localhost:8000/api/v2/admin/decision/account/lock/time",
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
            id_user: id_user,
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