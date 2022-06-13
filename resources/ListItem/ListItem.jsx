import React, { Fragment, useEffect, useState } from "react"
import axios from "axios"
import { useLocation , useNavigate } from "react-router-dom"
import Product from "../components/page/main/Product"
import useQuery from "./HookQuerySearch"
import Pagination from '@mui/material/Pagination'
import SkeletonLoading from "./Skeleton"
import NotFound404 from "../NotFound/NotFound404"
import { Helmet } from 'react-helmet-async';

export const fakesleep= (ms)=> new Promise(res=> setTimeout(res, ms))
const ListItem = () => {
  const [data, setData]= useState(()=> [])
  const [total, setTotal]= useState(()=> 0)
  const location= useLocation()
  const navigate= useNavigate()
  const query= useQuery()
  const [page, setPage]= useState(()=> 1)
  const [loading, setLoading]= useState(()=> false)
  const [outofData, setOutOfData]= useState(()=> false)
  const handleChange= (event, value)=> {
      setPage(value)
      navigate(`/category/products/${location.pathname.split("/")[3]}?current_page=${value}`)
  }
  useEffect(()=> {
      setPage(parseInt(query.get("current_page")) || 1)
      return ()=> setPage("")
  }, [query])
  useEffect(()=> {
      (async()=> {
        axios.interceptors.request.use(request=> {
            setLoading(()=> true)
            return request
        }, err=> {
            console.log(err)
        })
        axios.interceptors.response.use( response=> {
            setLoading(()=> false)
            return response
        }, err=> {
            console.log(err)
        })
        const res= await axios({
            url: "http://localhost:8000/category/products/",
            method: 'get',
            timeout: 10000,
            timeoutErrorMessage: 'Error',
            headers: {
                'X-CSRF-TOKEN': document.querySelector("meta[name='csrf-token']").getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                categories: location?.pathname.split("/")[3] || "all",
                current_page: query.get("current_page") || 1
            }
        })
        const result= await res.data
        if(result?.list?.length< 1) {
            setOutOfData(()=> true)
            setLoading(()=> false)
            return 
        }
        setOutOfData(()=> false )
        setData(result?.list)
        setTotal(result?.total)
      })()
      return ()=> {
        setData(()=> [])
        setTotal(()=> "")
      }
  }, [query.get("current_page"), page, location.key])
  if(data?.length < 1 && outofData=== false) {
      return (
        <div className="loading-pagination" style={{width: '100%', height: '100%', display: "flex", justifyContent: 'center',alignItems: 'center', alignContent: "center"}}>
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <div className="mp-53" style={{ display: "grid", flexDirection: "row", flexWrap: "wrap" ,justifyContent: "center", alignItems: "center", gridTemplateColumns: "repeat(4, 1fr)", gap: 30, marginTop: 50, width: 1150}}>
            {
                Array.from(Array(8).keys()).map((item, key)=> <SkeletonLoading key={key} />)
            }
            </div>  
        </div>
      )
  }
  else if(outofData=== true) {
    return (
        <>
            <NotFound404 message="Data is not exist or this link may be broken. " />
        </>
    )
}
  else if(loading=== true) {
      return (
          <div className="loading-pagination" style={{width: '100%', height: '100%', display: "flex", justifyContent: 'center',alignItems: 'center', alignContent: "center"}}>
              <Helmet>
                  <title>Loading...</title>
              </Helmet>
              <div className="mp-53" style={{ display: "grid", flexDirection: "row", flexWrap: "wrap" ,justifyContent: "center", alignItems: "center", gridTemplateColumns: "repeat(4, 1fr)", gap: 30, marginTop: 50, width: 1150}}>
                {
                    Array.from(Array(8).keys()).map((item, key)=> <SkeletonLoading key={key} />)
                }
              </div>
          </div>
      )
  }
  
  else {
      return (
        <Fragment>
            <Helmet>
                <title>{`${location.pathname.split("/")[location.pathname.split("/")?.length - 1].replace(/\b\w/g , function(m){ return m.toUpperCase(); } )}`} ( Page {`${page}`} ) - Unilight</title>
            </Helmet>
            <div className="container-list-item" style={{width: '100%', height: '100%', display: "flex", justifyContent: 'center',alignItems: 'center', alignContent: "center"}}>
                <div className="list-item" style={{ display: "grid", flexDirection: "row", flexWrap: "wrap" ,justifyContent: "center", alignItems: "center", gridTemplateColumns: "repeat(4, 1fr)", gap: 30, marginTop: 50, width: 1150}}>
                    {/* <button onClick={()=> console.log(location.search.current_page)}>Click</button> */}
                    {
                        data?.map((item, key)=> <Product item={item} key={key} section={location.pathname.split("/")[3]} />)
                    }
                </div>
            </div>
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center',alignItems: 'center', padding: "30px 0 30px 0", margin: "20px 0 20px 0"}}>
                <Pagination className="dai1" count={Math.ceil(total / 8)} color="primary" page={page} onChange={handleChange} />
            </div>
        </Fragment>
      )
  }
}

export default ListItem