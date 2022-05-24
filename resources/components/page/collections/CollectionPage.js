import "./CollectionPage.css"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import Product from "../main/Product"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { CircularProgress } from "@mui/material"
import NotFound404 from "../../../NotFound/NotFound404"
import { useLayoutEffect } from "react"
import { Helmet } from 'react-helmet-async';

const CollectionPage = () => {
    const location= useLocation()
    const [data, setData]= useState(()=> undefined)
    const [hasmore, setHardmore]= useState(()=> true)
    const [chunkData, setChunkData]= useState(()=> [])
    const [offset, setOffset]= useState(()=> 1)
    useLayoutEffect(()=> {
        (async()=> {
            try {
                const res= await axios({
                    url: "http://localhost:8000/f/c/b",
                    method: "get",
                    timeout: 10000,
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                    },
                    xsrfCookieName: 'qwerty',
                    xsrfHeaderName: 'token',
                    withCredentials: false,
                    responseType: "json",
                    params: {
                        b: location.pathname.split("/")[2].replaceAll("-", "")
                    }
                })
                const result= await res.data
                setData(result)
                setChunkData(result?.slice(0, 8))
            } catch (error) {
                throw new error
            }
        })()
    }, [location.pathname])
    const [displayTable, setDisplayTable] = useState(false)
    const categories = [
        "Accessories",
        "Bottom",
        "Denim",
        "Dress",
        "Jackets",
        "Jewellry",
        "Men",
        "Shoes",
        "T-Shirt",
        "Tops",
        "Women",
    ]

    const nextData= ()=> {
        if(chunkData?.length == data?.length) {
            setHardmore(()=> false)
            return
        }
        setOffset(prev=> parseInt(prev) + 1)
        setTimeout(()=> setChunkData(chunkData.concat(data.slice(8 * offset, 8 * offset + 8))), 750)
    }    
    if(data?.length== 0) return <NotFound404 />
    return (
        <div className="CollectionPage">
            <Helmet>
                <title>{location.pathname.split("/")[2].replaceAll("-", " ").trim().replace(/\b\w/g , function(m){ return m.toUpperCase(); } )} - Unilight</title>
            </Helmet>
            <div className="CollectionPage__categories">
                {categories?.map((item, index) => {
                    return (
                        <span className="CollectionPage__category" key={index}>
                            {item}
                        </span>
                    )
                })}
            </div>
            <div className="CollectionPage__banner"></div>
            <div className="CollectionPage__mainContent">
                <div className="CollectionPage__mainContent--utils">
                    <div className="CollectionPage__filter">
                        <div
                            className="CollectionPage__filter--trigger"
                            onClick={() => setDisplayTable((state) => !state)}
                        >
                            <FilterAltIcon />
                            Filter
                        </div>
                    </div>
                    <form className="CollectionPage__sort">
                        <select>
                            <option value="">Featured</option>
                            <option value="">Best selling</option>
                            <option value="">Alphabetically, A-Z</option>
                            <option value="">Alphabetically, Z-A</option>
                            <option value="">Price, low to high</option>
                            <option value="">Price, high to low</option>
                            <option value="">Date, old to new</option>
                            <option value="">Date, new to old</option>
                        </select>
                    </form>
                </div>
                <div
                    className="CollectionPage__filter--table"
                    style={{
                        height: displayTable ? 500 : 0,
                        border: displayTable
                            ? "1px solid rgb(222, 219, 219)"
                            : "",
                    }}
                ></div>
                <div className="CollectionPage__mainContent--products" style={{width: "100%"}}>
                    {/* {tempItems?.map((item, index) => {
                        return (
                            <Product
                                item={item}
                                key={index}
                                section={section}
                            />
                        )
                    })} */}
                    <InfiniteScroll
                        className="dskeq3"
                        style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 30, width: "100%", overflow: "hidden"}}
                        dataLength={chunkData?.length}
                        next={nextData}
                        hasMore={hasmore}
                        loader={<div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: 50, position: "absolute", bottom: -25}}><CircularProgress /></div>}
                        endMessage={
                            <div className="skodk_dsioj" style={{ textAlign: "center", position: "absolute", bottom: 0, marginTop: -5, width: "100%" }}>
                              <b>Yay! You have seen it all</b>
                            </div>
                          }
                    >
                        {
                            chunkData && chunkData?.map((item, key)=> <Product key={key} section={location.pathname.split("/")[2]} item={item} />)
                        }
                    </InfiniteScroll>
                </div>
                
            </div>
        </div>
    )
}

export default CollectionPage
