import axios from "axios"
import nProgress from "nprogress"
// import { fakesleep } from "./login"

const upload_avt= async (photo, setOpenPopup, setShowPopup, setAvt_user_s, setMessage)=> {
    const formData= new FormData()
    formData.append("avatar",photo[0])
    setOpenPopup(prev=> false)
    nProgress.configure({
        easing: "linear",
        speed: 500,
        trickleSpeed: 600,
        showSpinner: false,
        parent: ".container_avt"
    })
    axios.interceptors.request.use(request=> {
        nProgress.start()
        return request
    }, err=> {
        console.log(err)
    })
    axios.interceptors.response.use(response=> {
        nProgress.done()
        if(response.data?.state === "invalid") {
            setShowPopup(()=> true)
            setMessage(()=> "Upload failed")
            return response
        }
        setShowPopup(()=> true)
        setMessage(()=> "Upload successfully")
        return response
    }, err=> {
        console.log(err)
    })
    
    try {
        const res= await axios.post("http://localhost:8000/upload/avatar", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            timeout: 25000,
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
        })
        const result= await res.data
        if(res.data?.state=== "invalid") {
            return
        }
        
        setAvt_user_s(result)
        
        
    }catch(err) {
        console.log(err)
    }


}

export { upload_avt }