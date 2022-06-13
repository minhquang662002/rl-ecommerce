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
import ShopOwn from "./ShopOwn"
import Comment from "./Comment"
import Review from "./Review"
import Recommend from "./Recommend"
import { Helmet } from 'react-helmet-async';

import "./a.sass"

export const fakeSleep = ms => new Promise(r => setTimeout(r, ms)) 
const DetailPage = (props) => {
    const location= useLocation()
    useEffect(()=> {
        (async()=> {
            await fakeSleep(750)
            const res= await axios.get("http://localhost:8000/item", { params: {id_product: id_product  } })
            const data= await res.data
            setTempItem(data[0])
        })()
        return setItem2(()=> [])
    },[location.pathname.split("/")[location.pathname.split("/").length -1 ]])
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
    }, [location.pathname.split("/")[location.pathname.split("/").length -1 ]])
    
    const [item2, setItem2]= useState(()=> [])
    const [tempItem, setTempItem]= useState(()=> [])
    const { setNavChoices } = useContext(NavContext)
    const { id_product, title, price, color, size,decription, categories }= useLocation().state
    const { section, product } = useParams()
    const imageList = tempItem?.full_images?.split(",").map((item) => item)
    const [displayedImage, setDisplayedImage] = useState(0)
    const [transAmount, setTransAmount] = useState(0)
    const [currentColor, setCurrentColor] = useState()
    useEffect(() => {
        setNavChoices((state) => !state)
        setCurrentColor(findCurrentColor(displayedImage, tempItem, imageList))
    }, [displayedImage])
    
    if(tempItem?.length <1) {   
        return (
            <div className="lfg3" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
        )
    }
    else {
        return (
            <div className="DetailPage">
                <Helmet prioritizeSeoTags>
                    <title>{location.pathname.split("/")[location.pathname.split("/").length -1].replaceAll("-", " ").replace(/\b\w/g , function(m){ return m.toUpperCase();})} - Unilight</title>
                </Helmet>
                <div className="DetailPage__location">
                    <p>
                        <Link to="/">
                            <span>Home</span>
                        </Link>{" "}
                        {section && (
                            <>
                                /
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
                                /
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
                        author_shop={item2?.author_shop}
                        id_product={tempItem?.id_product}
                        image={imageList?.shift()}
                        buyer={props.buyer}
                        sale_specific_money={item2?.sale_specific_money}
                        sale_percent={item2?.sale_percent}
                    />
                </div>
                <ShopOwn id_shop_={item2?.id_shop} author_shop={item2?.author_shop} {...props?.user_} />
                <div className="pe2" style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: "row"}}>
                    <div className="sn1" style={{display: 'flex', boxSizing: 'border-box', marginTop: 15, width: 1150, justifyContent: 'space-between',  borderRadius: 8, boxShadow: "0 0 3px 0 #dee2e6"}}>
                        <div className="gf3" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "calc(100% - 200px)"}}>
                            <Comment {...props} {...tempItem} id_shop={item2?.id_shop} author_shop={item2?.author_shop} />       
                        </div>
                        <div className="or4" style={{display: "flex", flexDirection: "column", width: 350, justifyContent: 'flex-start'}}>
                            <Review {...props} {...tempItem} />
                            <Recommend />
                        </div>        
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailPage
