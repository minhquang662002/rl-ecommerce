import Skeleton from '@mui/material/Skeleton'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { I, X } from '../Message/ElementList'
import "./s.sass"

const LConversation = (props) => {
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
    const navLinkStyle = ({ isActive }) => ({
        backgroundColor: isActive ? '#0d6efd' : ''
        })    
  return (
    <NavLink onClick={()=> {props.setOffset(()=> 1);props.setoutofdata(()=> false)}} className="dsod" style={navLinkStyle} to={`/message/t/${props.id_conversation}`} >
        <div className="ct5" ref={ref} style={{width: "100%", height: 80, display: "flex", flexDirection: "row", alignItems: "center", gap: 10, cursor: "pointer", position: "relative" , padding: "0 5px", borderRadius: 6}}>
            <I avt_user={re?.avt_user} />
            <X lastname={re?.lastname} />
            <div className="rko4" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10}}></div>
        </div>
    </NavLink>
  )
}

export default LConversation