import React, { Fragment } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { logout } from '../action/logout'
import { NavContext } from '../components/context/NavContext'
import CircularProgress from '@mui/material/CircularProgress'

const SideInfo2 = (props) => {
  const navigate= useNavigate()
  const { setNavChoices }= useContext(NavContext)
  return (
    <Fragment>
    <div onClick={()=> { navigate("/account"); setNavChoices(prev=> !prev)}} style={{display: 'flex', justifyContent: 'center',alignContent: "center", alignItems: "center", width: "100%", padding: "10px", backgroundColor: "#2e89ff", borderRadius: 8, color: "#fff", cursor: "pointer"}}>
        Go to account page
    </div>
    <br />  
    <div style={{display: 'flex', justifyContent: 'center',alignContent: "center", alignItems: "center", width: "100%", padding: "10px", backgroundColor: "#343536", borderRadius: 8, color: "#fff", cursor: "pointer"}} onClick={()=> {navigate(`/shop?id=${props.in4[0]?.id_shop}`); setNavChoices(prev=> !prev)}}>Go to my shop</div>
    <br />
    <Logout />
    </Fragment>
  )
}
const Logout= (props)=> {
    const [loading, setLoading]= useState(()=> false)
    return (
        <div onClick={()=> logout(setLoading)} className="ls1" style={{display: "flex", justifyContent: "center", alignItems: 'center',width: "100%", padding: 10, backgroundColor: "#f3f3f5", borderRadius: 8, cursor: "pointer"}}>
          {
            loading=== false ? "Log out" : <CircularProgress style={{width: 16, height: 16}} />
          }
        </div>

    )
}

export default SideInfo2