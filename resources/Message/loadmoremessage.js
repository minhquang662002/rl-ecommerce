import _ from "lodash"
import axios from "axios"

export const loadmoremessage= async(id_conversation, offset, setOffset, setDatamore, setConversation, conversation, setOutofdata, setLoading)=> {
    axios.interceptors.request.use(request=> {
        setLoading(()=> true)
        return request
    }, err=> {
        return console.log(err)
    })
    axios.interceptors.response.use(response=> {
        setLoading(()=> false)
        return response
    }, err=> {
        return console.log(err)
    })
    const res= await axios({
        url: "http://localhost:8000/message/chat/conversation",
        method: "get",
        timeout: 10000,
        timeoutErrorMessage: "Time out login",
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
        xsrfHeaderName: 'X-CSRF-TOKEN',
        withCredentials: false,
        validateStatus: (status)=> {
            return status >= 200 && status < 300
        },
        maxRedirects: 10,
        responseType: "json",
        params: {
            id_conversation: id_conversation,
            page: offset
        }
    })
    const result= await res.data
    setOffset((prev)=> parseInt(prev) +1 )
    const al= _.orderBy(result, ['timeup'], ['asc'])
    if(al?.length <=0) {
        setOutofdata(()=> true)
    }
    setConversation(al.concat(conversation))
    return
}