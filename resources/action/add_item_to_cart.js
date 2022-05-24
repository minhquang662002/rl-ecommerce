import axios from "axios"

const additemtocart= (id_product, id_user)=> {
    return axios({
        url: "http://localhost:8000/add/item/cart",
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
            id_product: id_product,
            id_user: id_user,
        }
    })
}

export { additemtocart }