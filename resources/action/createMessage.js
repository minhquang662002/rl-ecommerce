import axios from "axios"

export const createMessage= async (id_user, author_shop, navigate)=> {
    const res= await axios({
        url: "http://localhost:8000/c/m/n",
        method: 'get',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        params: {
            i_s: id_user,
            i_r: author_shop,
            id_conversation: v4(),
            timeup: parseInt(new Date().getTime()) + 7* 72000,
            timedl: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1)
        }
    })
    const result= await res.data
    navigate(`/message/t/${result}`, {replace: false, state: { a: "nav"}})
}