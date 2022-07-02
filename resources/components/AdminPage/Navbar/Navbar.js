import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="fgsfsasfds" style={{ height: 60, display: "flex", alignItems: 'center', width: "100%", padding: "0 50px", gap: 30}}>
        <Link to="/admin/manage/user" style={{textDecoration: "none"}}>
            <div style={{fontSize: 18, fontWeight: 600}}>User</div>
        </Link>
        <Link to="/admin/manage/shop" style={{textDecoration: "none"}}>
            <div style={{fontSize: 18, fontWeight: 600}}>Shop on unilight</div>
        </Link>
        <Link to="/admin/manage/help" style={{textDecoration: "none"}}>
            <div style={{fontSize: 18, fontWeight: 600}}>Support </div>
        </Link>
    </div>
  )
}

export default Navbar
