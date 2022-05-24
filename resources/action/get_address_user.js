import axios from "axios"


const getaddressuser= async (id_user, setAddress, setSpecificLocation, dispatch)=> {
    const res= await axios({
        url: "http://localhost:8000/address/user",
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
            id_user: id_user 
        }
    })    
    const result= await res.data
    let arr= []
    result.map(item=> {item.map(item2=> arr.push(Object.values(item2)[0]))})
    setSpecificLocation(arr[0].toString())
    dispatch({type: "SET_NEW_ADDRESS_SUCCESS", payload: arr?.toString()})
    return setAddress(arr.toString())
}

export { getaddressuser }