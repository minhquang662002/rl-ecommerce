import { useContext, useEffect, useState } from "react"
import { NavContext } from "../../context/NavContext"
import "./QuickViewModal.css"
// import QuickViewModalRight from "./QuickViewModalRight"
import QuickViewModalLeft from "./QuickViewModalLeft"
import { MyContext } from "../../../ContextApp/ContextContainer"
import DetailPageRight from "../../page/detail/DetailPageRight"
import axios from "axios"

const QuickViewModal = () => {
    const {
        navChoices: { quickViewData },
        setNavChoices,
    } = useContext(NavContext)
    const { allImages, id_product } = useContext(MyContext)
    const imageList = allImages?.map((item) => item).flat()
    const [displayedImage, setDisplayedImage] = useState(
        0
    )
    const [idProductUp, setIdProductUp]= useState(()=> id_product)
    useEffect(()=> {
        setIdProductUp(()=> id_product)
    }, [id_product])
    const [data, setData]= useState(()=> [])
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8000/brief",
                method: "post",
                timeout: 10000,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
                data: {
                    id_product: idProductUp
                }
            })
            const result= await res.data
            setData(result[0])

            return ()=> {
                setData(()=> [])
            }
        })()
    }, [idProductUp])
    if(data=== []) {
        return (
            <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
        )
    }
    else {

        return (
            <div className="QuickViewModal">
                <QuickViewModalLeft
                    allImages={allImages?.filter(item=> item!= "")}
                    displayedImage={displayedImage}
                    setDisplayedImage={setDisplayedImage}
                    imageList={imageList?.filter(item=> item!= "")}
                />
                <DetailPageRight 
                    className="qwe"
                    title={data?.title}
                    price={data?.price}
                    color={data?.color}
                    decription={data?.decription}
                    size={data?.size} 
                    categories={data?.categories}
                    currentColor={0}
                    />
               
            </div>
        )
    }
}

export default QuickViewModal
