import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { fetchnotifications, sawnotifications } from '../firebase/fetch_notifications/fetch_notifications'
import { Link } from "react-router-dom"
import "./Notifications.sass"
import moment from "moment"
import { useInView } from "react-intersection-observer"
import Skeleton from '@mui/material/Skeleton'
import axios from 'axios'

const Notifications = (props) => {
  
  const [loading, setLoading]= useState(()=> undefined)
  useEffect(()=> {
    sawnotifications(props.id_user)
    fetchnotifications(setData, props.id_user, setLoading, props.setUnWatch)
  }, [props.id_user])
  const [data, setData]= useState()
  const clickOutSide= (e)=> {
    if(ref.current && !ref.current.contains(e.target)) {
        props.setOpenPopup(prev=> false)
    }
  }
  const ref= useRef()
  useEffect(()=> {
      document.addEventListener("click", clickOutSide)
      return ()=> document.removeEventListener("click", clickOutSide)
  } ,[])
  const upnotis= ()=> {
    // Object.values(data)?.map(item=> axios())
  }
  return (
    <div ref={ref} className="nf1" style={{display: "flex", flexDirection: "column", width: 500, height: 600, overflow: "auto", backgroundColor: "#f2f0f5", position: "absolute", top: 30, right: 0, zIndex: 999, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="nft1" style={{fontSize: 24, fontWeight: 600, padding: 10}}>Notifications</div>
        <div style={{padding: 10, width: "100%",}}>
          {/* data */}
          {
            data !== undefined && data !== null &&  
            Object.values(data)?.map((item, key)=> Object.values(item).map(item2=> <Element key={key} {...item2} />))
          }
          {
            loading===true && 
            Array.from(Array(6).keys()).map((item, key)=> <Skeleton variant="rectangular" key={key} className="fn5" style={{height: 80, width: "100%", display: "flex", alignItems: "center", padding: "0 5px", borderRadius: 4, margin: "5px 0"}}></Skeleton>)
          }
          {
          (  loading=== false && Object?.values(data)?.length<=0 )&&
            <div className="et5" style={{textAlign: "center", padding: 10, fontSize: 18, color: "#3a3b3c"}}>You don't have notifications recently</div>
          }
        </div>
    </div>
  )
}
const Element= (props)=> {
  const { ref, inView }= useInView()
  return (
    <Link to={"/"+ props.link}> 
      <div ref={ref} className="fn5" style={{height: 80, width: "100%", display: "flex", alignItems: "center", padding: "0 5px", borderRadius: 4}}>
          <div className="ig2" style={{width: 56, height: 56, borderRadius: "50%", overflow: "hidden", }}>
              <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={props.avatar_user} alt="open" referrerPolicy="no-referrer" />
          </div>
          <div className="ct4" style={{display: "flex", height: "100%", overflow: "hidden", textOverflow: "ellipsis", flexDirection: "column", justifyContent: "center", marginLeft: 10, lineHeight: 1.5}}>
              <div className="lw2"><strong>{props.user_name}</strong> {props.content}</div>
              <div className="cs3" style={{fontSize: 12}}>
                  {moment(`${props.time}`, "YYYY-MM-DD hh:mm:ss a").fromNow()}
              </div>
          </div>  
      </div>
    </Link>
  )
}
export default Notifications