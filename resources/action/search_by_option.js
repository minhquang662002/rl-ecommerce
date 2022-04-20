import axios from "axios"
export const fakesleep = ms => new Promise(r => setTimeout(r, ms));
const search_by_option= async (categories, setData, setLoading, setValue)=> {
    setValue(()=> categories)
    setLoading(()=> true)
    await fakesleep(1000)
    const res= await axios({
        url: "http://localhost:8000/search/option",
        method: "get",
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        params: {
            i: categories
        }
    })
    const result= await res.data
    setData(result)
    return setLoading(()=> false)
}

export { search_by_option }