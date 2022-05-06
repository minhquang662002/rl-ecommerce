import axios from "axios"

const addfavorite= async (id_user, id_product, setcheck)=> {
    const res= await axios({
        url: "http://localhost:8000/add/item/favorite",
        method: "post",
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        data: {
            id_user: id_user,
            id_product: id_product,
        }
    })
    const result= await res.data
    if(result== "success") {
    }
    setcheck(true) 
}

export { addfavorite }