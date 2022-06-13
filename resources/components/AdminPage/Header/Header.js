import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../action/logout'

const Header = (props) => {
  const [loading, setloading]= useState(()=> false)
  return (
    <div className="fgewrdgrdgfe" style={{height: 60, display: "flex", justifyContent: "space-between", alignItems: 'center', width: "100%", padding: "0 50px", background: "#f2f0f5"}}>
        <Link to="/admin/manage" style={{textDecoration: "none"}}>
            <div style={{fontSize: 18, fontWeight: 600}}>Admin Unilight</div>
        </Link>
        <div onClick={()=> logout(setloading)} style={{padding: "10px 20px", width: 90, height: 36, borderRadius: "80px", color: "#fff", background: "#2e89ff", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {
                loading=== true ? <CircularProgress style={{color: "#fff", width: 15, height: 15}} /> : "Logout"
            }
        </div>
    </div>
  )
}

export default Header