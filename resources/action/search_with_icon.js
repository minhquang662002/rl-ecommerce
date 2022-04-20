import axios from "axios"
import { fakesleep } from "./search_by_option"

const search_with_icon= async (query_search, setData, setLoadingIcon)=> {
    setLoadingIcon(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:8000/search/results/",
        method: 'get',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        params: {
            query_search: query_search
        }
    })

    const result= await res.data
    setData(result)
    setLoadingIcon(()=> false)
}

export { search_with_icon }