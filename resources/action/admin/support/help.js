import axios from "axios"
import moment from "moment"
import { v4 } from "uuid"
import { fakesleep } from "../../../ListItem/ListItem"

export const help= async (setloading, setopensnackbar, data, id_user, settexthelp)=> {
    setloading(()=> true)
    await fakesleep(1750)
    const res= await axios({
        url: "http://localhost:8000/api/v1/help",
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
            data: data,
            id_help_center: v4(),
            time_send: parseInt(moment(new Date()).valueOf())
        }
    })
    setloading(()=> false)
    const result= await res.data
    setopensnackbar(()=> true)
    await fakesleep(2500)
    setopensnackbar(()=> false)
    settexthelp(()=> "")
    return console.log(result)
}