import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useQuery from '../../ListItem/HookQuerySearch'
import { Product } from '../../OrderComponent/OrderComponent'

const ComponentForAdmin = (props) => {
  const query= useQuery()
  const [data, setdata]= useState(()=> [])
  const [change, setchange]= useState(()=> false)
  useEffect(()=> {
    if(query.get("q") == 5) {
      (async()=> {
        const res= await axios({
          url: "http://localhost:8000/api/v1/request/order/product",
          method: "get",
          params: {
            id_shop: query.get("id")
          },
          timeout: 10000,
          timeoutErrorMessage: "Time out login",
          headers: {
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
          },
          xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
          xsrfHeaderName: 'X-CSRF-TOKEN',
          withCredentials: false,
          validateStatus: (status)=> {
              return status >= 200 && status < 300
          },
          maxRedirects: 10,
          responseType: "json",
               
        })
      const result= await res.data
      setdata(()=> result)  
      })()
    }
  },[query, change])
  return (
    <>
      {
        <div style={{width: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
          <div className="fdgwrdgedgsasa" style={{width: "100%", maxWidth: 1024 , padding: "0 30px", height: "auto", margin: 0, borderRadius: 10, border: "1px solid #e2e8f0", display: "block", maxHeight: 400, overflow: "auto"}}>
            {
              data?.map((item, key)=> <Product setchange={setchange} oooo={true} key={key} {...item} />)
            }
          </div>
        </div>
      }
    </>
  )
}

export default ComponentForAdmin