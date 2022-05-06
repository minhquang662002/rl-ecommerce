import axios from "axios"

export const getsettingshop= async (setl, sett, id_user)=> {
    const res= await axios({
        url: "http://localhost:8000/setting/",
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
        auth: {
            email: "giang10a1dz@gmail.com",
            password: "giangsieucapvippro"
        },
        maxContentLength: 100000,
        responseType: "json",
        params: {
            id_user: id_user,
        }
    })
    const result= await res.data
    setl(result[0]?.language)
    sett(result[0]?.theme)
}
export const settingshop= async (set, id_user, query_string, type)=> {
    const res= await axios({
        url: "http://localhost:8000/setting/",
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
        auth: {
            email: "giang10a1dz@gmail.com",
            password: "giangsieucapvippro"
        },
        maxContentLength: 100000,
        responseType: "json",
        data: {
            id_user: id_user,
            query_string: query_string,
            type_: type
        }
    })
    const result= await res.data
    if(type=="language") {
        set(result[0]?.language)
    }   
    else if(type=="theme") {
        set(result[0]?.theme)
    }
    return
}
export const setLang= async ()=> {

}