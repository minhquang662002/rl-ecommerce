import axios from "axios"

const getShoppingCart= async (setData, listNoLogin)=> { 
    const res= await axios({
        url: 'http://localhost:8000/carts/shopping/item',
        method: 'POST',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        data: {
            list: listNoLogin?.split(",")
        }

    })
    const result= await res.data
    return setData(result)
}

export { getShoppingCart }