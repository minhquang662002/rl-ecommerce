import axios from "axios"

const getShoppingCart= async (setData, listNoLogin, id_user)=> { 
    try {
        const res= await axios({
            url: 'http://localhost:8000/carts/shopping/item',
            method: 'get',
            timeout: 10000,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            params: {
                list: listNoLogin,
                id_user: id_user 
            }
        })
        const result= await res.data
        if(result?.f=== "true") {
            const res= await axios({
                url: 'http://localhost:8000/carts/shopping/item/user',
                method: 'get',
                timeout: 10000,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
                params: {
                    id_user: id_user 
                }
            })
            const result= await res.data
            return setData(result)
        }
        setData(result)
        
    } catch (error) {
        console.log(error)
    }
}

export { getShoppingCart }