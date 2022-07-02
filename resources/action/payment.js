import axios from "axios"
import Cookies from "js-cookie"
import moment from "moment"

export const payment= async (author_shop, quantity, price, image,title, setLoading, dispatch, buyer, id_product, color, size)=> {
    axios.interceptors.request.use(request=> {
        setLoading(()=> true)
        return request
    }, err=> {
        console.log(err)
        throw new err
    })
    axios.interceptors.response.use(response=> {
        setLoading(()=> false)
        return response
    }, err=> {
        console.log(err)
        throw new err
    })
    const res= await axios({
        url: "http://localhost:8000/checkout/",
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
        data: {
            id_user: buyer, quantity, price, image, title,buyer: author_shop , timeu: moment(new Date()).valueOf(), id_product, color, size
        }

    })
    const result= await res.data
    if(result?.length > 0) {
        Cookies.set("se_pa", result[2], {
            expires: 1/ 24
        })
        dispatch({type: "get_se_pa", payload: result[2]})
        location.assign(result[0])
    }
}
