import axios from "axios"
import { createMessage } from "./createMessage"

export const goToMessage= async (id_user, author_shop, navigate)=> {
    const res= await axios({
        url: "http://localhost:8000/c/m/t",
        method: "get",
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        params: {
            i_s: id_user, // props.id_user
            i_r: author_shop // props.author_shop
        }
    })
    const result= await res.data
    let a= []
    let h= 0
    Object.values(result.a2)?.map(item=> a.push(item.id_conversation))
    result.a1?.map(item=> {
        if(a.includes(item.id_conversation)=== true) {
            h= 1234
            navigate(`/message/t/${item.id_conversation}`, {replace: false, state: {a: 'nav'}})
            return
        }
        return 
    })
    if(h== 0) {
        return createMessage(id_user, author_shop, navigate)
    }
}