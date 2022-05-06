import axios from "axios"

const getfavoritelogin= async (setData, setLoading, id_user)=> {
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
          url: 'http://localhost:8000/favorite/items/exist/',
          method: 'get',
          timeout: 5000,
          timeoutErrorMessage: "Error",
          headers: {
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
          },
          xsrfCookieName: 'qwerty',
          xsrfHeaderName: 'token',
          withCredentials: false,
          responseType: "json",
          params: {
            id_user: id_user
          }
        })
        const result= await res.data
        setData(result)
      } catch (error) {
        console.log(error)
        setData(error)
      }
}

export { getfavoritelogin }