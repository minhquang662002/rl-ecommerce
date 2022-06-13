import axios from "axios"

const fakesleep= (ms)=> new Promise(rel=> setTimeout(rel, ms))
const logout= async (setLoading)=> {
    setLoading(()=> true)
    await fakesleep(2000)
    const res= await axios({
        url: "http://localhost:8000/logout",
        method: "post",
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

    })
    setLoading(()=> false)
    const result= await res.data
    if(result.logout=== "true") {
        localStorage.clear("u_ol")
        location.reload();
    }
}

export { logout }