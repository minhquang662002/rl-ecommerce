import React, {  useEffect, useRef, useState } from 'react'
import { useq2 } from '../ListItem/HookQuerySearch'
import ShopOwn from '../components/page/detail/ShopOwn'
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component"
import Product from '../components/page/main/Product'
import { CircularProgress } from '@mui/material'
import _ from "lodash"
import { useLocation } from 'react-router-dom'
import ForAdmin from './ForAdmin'
import UploadProduct from './UploadProduct'
import { Helmet } from 'react-helmet-async';
import NotFound404 from '../NotFound/NotFound404'
import ContainerStaticstic from './Staticstic/ContainerStaticstic'

const Shoppage = (props) => {
    const location= useLocation()
    const query= useq2()
    const [data, setData]= useState(()=> [])
    const [hasmore, setHasMore]= useState(()=> true)
    const [chunkData, setChunkData]= useState(()=> [])
    const [offset, setOffset]= useState(()=> 1)
    const [author_shop, setAuthorShop]= useState(()=> "")
    const myRef= useRef()
    const myRef2= useRef()
    const [dataset1, setdataset1]= useState(()=> ({
        color: "rgb(46, 137, 255)",
        title: "Revenue"
    }))
    const [dataset2, setdataset2]= useState(()=> ({
        color: "rgb(255, 165, 0)",
        title: "Access times",  
    }))
    const nextData= ()=> {
        if(chunkData?.length == data?.length && data?.length >= 1) {
            setOffset(()=> 1)
            setHasMore(()=> false)
            return
        }
        setOffset(prev=> parseInt(prev) + 1)
        setTimeout(()=> setChunkData(chunkData.concat(data?.slice(8 * offset, 8 * offset + 8))), 750)
    }    
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8000/s/a/i",
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
                    id_shop: query.get("id")
                }
            })
            const result= await res.data
            setChunkData(()=> result[0]?.slice(0, 8))
            setData(()=> result[0])
                setAuthorShop(()=> result[1][0]?.author_shop || "-1")
        })()

        return ()=> {
            setOffset(()=> 0)
            setData(()=> [])
            setChunkData(()=> [])
        }
    }, [location.pathname])
    const setsl= (e)=> {
        switch(parseInt(e.target.value)) {
            case 1:
                return
            case 2:
                setData(()=> _.orderBy(data, ['price'], ['asc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            case 3:
                setData(()=> _.orderBy(data, ['title'], ['asc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            case 4:
                setData(()=> _.orderBy(data, ['price'], ['desc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            case 5:
                setData(()=> _.orderBy(data, ['price'], ['asc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            case 6:
                setData(()=> _.orderBy(data, ['price'], ['desc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            case 7:
                setData(()=> _.orderBy(data, ['timeup'], ['asc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            case 8:
                setData(()=> _.orderBy(data, ['price'], ['desc']))
                setChunkData(data?.slice(0 , 8))
                setHasMore(()=> true)
                setOffset(()=> 1)
                return
            default: 
                return 
        }
    }
    if(chunkData?.length<=0 && author_shop !== "-1") return <div>No find out any products.</div>
    else if(author_shop !== "-1") {
        return (
            <>
                <Helmet>
                    <title>Shop - Unilight</title>
                </Helmet>
                <ShopOwn id_shop_={query.get("id")} a_s={author_shop} {...props} />
                <br />
                {   
                    author_shop== props.id_user &&
                    <>
                        <ForAdmin myRef={myRef} myRef2={myRef2} />
                        <br />
                        <ContainerStaticstic id_user={props.id_user} id_shop={query.get("id")} dataset1={dataset1} dataset2={dataset2} setdataset1={setdataset1} setdataset2={setdataset2} />
                        <UploadProduct myRef2={myRef2} {...props} id_shop={query.get("id")} a_s={author_shop} />
                    </>
                }
                {/* <button onClick={()=> console.log(moment("26-04-2022", "DD-MM-YYYY").valueOf())}>click</button> */}
                {}
                <br />
                <Classify setsl={setsl} />
                <br />
                <div className="CollectionPage__mainContent--products" style={{width: "100%", padding: "0 20px", position: "relative"}}>
                    <div ref={myRef} style={{position: "absolute", bottom: 0, left: 0}}></div>
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
                            chunkData && chunkData?.map((item, key)=> <Product section={"own"} key={key} item={item} />)
                        }
                    </InfiniteScroll>
                </div>
            </>
        )
    }
    else return <NotFound404 />
    
}
const Classify= (props)=> {
    const [displayTable, setDisplayTable] = useState(false)
    return (
        <div className="dssajiwe" style={{width: "100%", height: 100}}>
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
                    <select onChange={(e)=> props.setsl(e)}>
                        <option value={1}>Featured</option>
                        <option value={2}>Best selling</option>
                        <option value={3}>Alphabetically, A-Z</option>
                        <option value={4}>Alphabetically, Z-A</option>
                        <option value={5}>Price, low to high</option>
                        <option value={6}>Price, high to low</option>
                        <option value={7}>Latest</option>
                        <option value={8}>Oldest</option>
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
                            background: "red",
                            position: "relative",
                            zIndex: 999999  
                    }}
                ></div>
        </div>
    )
}

export default Shoppage