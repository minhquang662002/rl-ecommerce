import React from 'react'
import { ButtonRipple } from '../components/ButtonRipple/Button'
import { useNavigate } from "react-router-dom"
import { Helmet } from 'react-helmet-async'

const NotFound404 = (props) => {
  const navigate= useNavigate()
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Helmet>
        <title>Not Found - Unilight</title>
      </Helmet>  
      <div style={{color: "#b0b3b8", fontSize: 24, fontWeight: 600}}>This Page Isn't Available</div>
      <div style={{textAlign: 'center',color: "#b0b3b8", fontSize: 18}}>{props.message}</div>
      <br />
      <ButtonRipple><div onClick={()=> navigate("/")}>Back to home</div></ButtonRipple>
      <br />
      <div style={{color: "#2374e1", fontWeight: 600, cursor: "pointer"}} onClick={()=> navigate(-1)}>Go back</div>
    </div>
  )
}

export default NotFound404