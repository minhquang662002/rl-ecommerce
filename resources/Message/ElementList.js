import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import "./Element.sass"
import _ from "lodash"

export const ElementList = (props) => {
  const ref= useRef()
  const [re, setRe]= useState(()=> [])
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8000/represent/message/conversation",
        method: "get",
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
        params: {
            id_conversation: props.id_conversation,
            id_user: props.id_user
        }
      })  
      const result= await res.data
      setRe(result[0])
    })()
  }, [])
  const t= async ()=> {
    props.setToggle(()=> true)
    props.setIdConversation(()=> props.id_conversation)
    const res= await axios({
        url: "http://localhost:8000/message/chat/conversation",
        method: "get",
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
        params: {
            id_conversation: props.id_conversation,
            page: props.offset
        }
    })
    const result= await res.data
    props.setOffset((prev)=> parseInt(prev) +1 )
    props.setConversation(_.orderBy(result, ['timeup'], ['asc']))

  }
  useEffect(()=> {
    ref.current.addEventListener("click", t)
    return ()=> ref.current?.removeEventListener("click", t)
  }, [props.id_conversation])
  if(re?.length <=0 ) {
    return (
      <div className="ct5" ref={ref} style={{width: "100%", height: 80, display: "flex", flexDirection: "row", alignItems: "center", gap: 10, padding: "0 5px"}}>
        <div className="ig2" style={{display: "flex", width: 70, height: 70, borderRadius: "50%", overflow: "hidden", }}> 
          <Skeleton variant="circular" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
        <div className="kw3" style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 10}}>
          <Skeleton variant="rectangular" width={70} height={20} />
          <Skeleton variant="rectangular" width={200} height={20} />
        </div>
      </div>  
    )
  }
  return (
    <div className="ct5" ref={ref} style={{width: "100%", height: 80, display: "flex", flexDirection: "row", alignItems: "center", gap: 10, cursor: "pointer", position: "relative"}}>
      <I avt_user={re?.avt_user} />
      <X lastname={re?.lastname} />
      <div className="rko4" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10}}></div>
    </div>
  )
}
export const I= (props)=> {
  return (
    <div className="ig2" style={{display: "flex", width: 70, height: 70, borderRadius: "50%", overflow: "hidden", }}> 
      <img className="ow3" src={props.avt_user} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
    </div>
  )
}
export const X= (props)=> {
  return (
    <div className="kw3" style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 5}} >
      <div className="k324">{props.lastname}</div>
    </div>
  )
}

export default ElementList