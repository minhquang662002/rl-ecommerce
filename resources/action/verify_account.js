import axios from "axios"

const verifyAccount= async (verifyCode, navigate, setState)=> {
    const res= await axios({
        url: 'http://localhost:8000/authentication/user/auth', 
        method: 'POST',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        data: {
            _token: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            verifyCode: verifyCode
        }
    })
    const result= await res.data
    setState(result.state)
    if(result.state===1) {
        return navigate("/loading", { replace: true })
    }
    

}

export { verifyAccount }