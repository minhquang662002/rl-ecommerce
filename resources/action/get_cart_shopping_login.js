import axios from "axios"

export const getcardshoppinglogin= async (setData, setLoading, id_user)=> {
    axios.interceptors.request.use(request=> {
        setLoading(()=> true)
        return request
    })
    axios.interceptors.response.use(response=> {
        setLoading(()=> false)
        return response
    })
    try {
        const res= await axios({
        url: "http://localhost:8000/carts/shopping/item/user",
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
        params: {
            id_user: id_user
        },
        maxContentLength: 100000,
        responseType: "json",
    })
    const result= await res.data
    return setData(result?.reduce((accum, val) => {
        const dupeIndex = accum.findIndex(arrayItem => arrayItem.id_product === val.id_product);

        if (dupeIndex === -1) {
          // Not found, so initialize.
          accum.push({
            qty: 1,
            ...val
          });
        } else {
          // Found, so increment counter.
          accum[dupeIndex].qty++;
        }
        return accum;
    }, []))
    } catch (error) {
        console.log (error)
    }
    
}