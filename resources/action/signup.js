import axios from "axios"


const signup= async (info, setErr, navigate, setNavChoices)=> {
    const res= await axios({
        url: 'http://localhost:8000/signup/',
        method: 'POST',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        data: {
            ...info
        }
    })
    const result= await res.data
    if(result.err.includes(0)) {
        setNavChoices(prev=> ({...!prev}))
        return navigate("/verify/user", { state: {isAuthencating: true, email: info.email} })
    } 
    return setErr(result.err)
}

export { signup }