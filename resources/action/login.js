import axios from "axios"
export const fakesleep = ms => new Promise(r => setTimeout(r, ms))
const login= async (user, setLog, setNavChoices2, navigate, setLogged, setLoading, setCheckUser)=> {
    const cancelToken= axios.CancelToken
    let cancel
    const res= await axios({
        url: "http://localhost:8000/login",
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
        cancelToken: new cancelToken(function executor(c) {
            cancel= c
        }), 
        auth: {
            email: "giang10a1dz@gmail.com",
            password: "giangsieucapvippro"
        },
        maxContentLength: 100000,
        responseType: "json",
        data: {
            email: user?.email,
            password: user?.password,
        }
    })
    .then(async (res)=> {
        setLog(res.data)
        if(res.data=== "") {
            setLogged(()=> true)
            setLoading(()=> true)
            await fakesleep(1000)
            setLoading(()=> false)
            setNavChoices2()
            setCheckUser(()=> true)
            if(navigate== 1) {
                location.href = "http://localhost:8000/"
                return
            }
            location.reload()
            return      
        }
        else {
            setLogged(()=> false)
            setLoading(()=> true)
            await fakesleep(1000)
            setLoading(()=> false)
            setCheckUser(()=> false)
            return
        }
    })
    .catch(err=> {
        if(axios.isCancel(err)) {
            console.log("canceled")
        }
        else {
            console.log("server response error")
        }
    })
    cancel()
}

export { login }