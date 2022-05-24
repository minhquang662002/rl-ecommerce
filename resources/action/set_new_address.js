import axios from "axios"

export const fakesleep= (ms)=> new Promise(rel=> setTimeout(rel, ms))
const setnewaddress= async (id_user, setAddress, setSpecificLocation, n_p, n_d, n_w, n_sl, dispatch, setOe, setShowPopup)=> {
    const res= await axios({
        url: "http://localhost:8000/set/address/user",
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
            p: n_p,
            d: n_d,
            w: n_w,
            sl: n_sl
        }
    })    
    const result= await res.data
    let arr= []
    result.map(item=> {item.map(item2=> arr.push(Object.values(item2)[0]))})
    setSpecificLocation(arr[0].toString())
    dispatch({type: "SET_NEW_ADDRESS_SUCCESS", payload: arr.toString()})
    setAddress(arr.toString())
    setShowPopup(()=> true)
    setOe(()=> false)
}

export { setnewaddress  }