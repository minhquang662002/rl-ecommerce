import "./DetailPage.css"
import { useEffect, useContext, useState } from "react"
import { useLocation, useParams } from "react-router"
import { NavContext } from "../../context/NavContext"
import _ from "lodash"
import DetailPageRight from "./DetailPageRight"
import DetaiPageLeft from "./DetaiPageLeft"
import findCurrentColor from "../../../utils/repeatFuction"
import { Link } from "react-router-dom"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
export const fakeSleep = ms => new Promise(r => setTimeout(r, ms)) 
const DetailPage = () => {
    useEffect(()=> {
        (async()=> {
            await fakeSleep(1000)
            const res= await axios.get("http://localhost:8000/item", { params: {id_product: id_product  } })
            const data= await res.data
            setTempItem(data[0])
        })()
        return setItem2(()=> [])
    },[])
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: 'http://localhost:8000/brief',
                method: 'POST',
                timeout: 10000,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
                data: {
                    id_product: id_product
                }
            })
            const data= await res.data
            setItem2(data[0])
        })()
        return ()=> setItem2(()=> [])
    }, [])
    const [item2, setItem2]= useState(()=> [])
    const [tempItem, setTempItem]= useState(()=> [])
    const { setNavChoices } = useContext(NavContext)
    const { id_product, title, price, color, size,decription, categories }= useLocation().state

    

    const { section, product } = useParams()

    const imageList = tempItem?.full_images?.split(",").map((item) => item).flat()
    const [displayedImage, setDisplayedImage] = useState(0)
    const [transAmount, setTransAmount] = useState(0)
    const [currentColor, setCurrentColor] = useState()

    useEffect(() => {
        setNavChoices((state) => !state)
        setCurrentColor(findCurrentColor(displayedImage, tempItem, imageList))
    }, [displayedImage])
    if(tempItem?.length <1) {
        return (
            <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
        )
    }
    else {

        return (
            <div className="DetailPage">
                <div className="DetailPage__location">
                    <p>
                        <Link to="/">
                            <span>Home</span>
                        </Link>{" "}
                        {section && (
                            <>
                                &gt
                                <Link to={`/collections/${section}`}>
                                    <span>
                                        {" "}
                                        {_.startCase(
                                            _.toLower(section.replaceAll("-", " "))
                                        )}{" "}
                                    </span>
                                </Link>
                            </>
                        )}
                        {product && (
                            <>
                                &gt
                                <span>
                                    {" "}
                                    {_.startCase(
                                        _.toLower(product.replaceAll("-", " "))
                                    )}{" "}
                                </span>
                            </>
                        )}
                    </p>
                </div>
                <div className="DetailPage__product" style={{position: "relative"}}>
                    <DetaiPageLeft
                        imageList={imageList}
                        transAmount={transAmount}
                        setTransAmount={setTransAmount}
                        displayedImage={displayedImage}
                        setDisplayedImage={setDisplayedImage}
                    />
                    <DetailPageRight
                        className1="thu"
                        className2="thu2"
                        title={title || item2?.title}
                        price={price || item2?.price}
                        color={color || item2?.color}
                        decription={decription || item2?.decription}
                        size={size || item2?.size} 
                        categories={categories || item2?.categories}
                        currentColor={0}
                        setDisplayedImage={setDisplayedImage}
                    />
                </div>
            </div>
        )
    }
}

export default DetailPage
