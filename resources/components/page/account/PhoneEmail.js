import React from 'react'

const PhoneEmail = (props) => {
  return (
    <>
    <div>Email: {props.user.email} <span className="sk1" style={{color: "#2e89ff", textDecoration: "underline", cursor: "pointer"}}>Edit</span></div>
    <br />  
    <div>Phone number: {props.data?.phonenumber} <span className="sk1" style={{color: "#2e89ff", textDecoration: "underline", cursor: "pointer"}}>Edit</span></div>
    </>
  )
}

export default PhoneEmail