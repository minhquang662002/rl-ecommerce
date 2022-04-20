import axios from "axios"

const getallimage= async (id_product, setListImage, setIdProduct)=> {
    const res= await axios({
        url: 'http://localhost:8000/quickview',
        method: "post",
        responseType: "json",
        timeout: 10000,
        timeoutErrorMessage: "can't get data",
        data: {
            id_product
        }
    })
    const result= await res.data
    setListImage(result.allImages[0].full_images.split(",")),
    setIdProduct(result.id_product)
}

export { getallimage }