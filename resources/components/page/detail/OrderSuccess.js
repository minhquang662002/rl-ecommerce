import React, { useEffect } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import "./OrderSuccess.sass"

const OrderSuccess = (props) => {
  useEffect(() => {
      setTimeout(()=> {
          props.setOrderSuccess(()=> false)
      }, 4000)
  }, [props.setOrderSuccess])

  return (
    <div className="os4" style={{padding: 20, display: "flex", justifyContent: 'center',alignItems: 'center',flexDirection: 'column', position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 999999999999, background: "#62e462"}} >
        <CheckCircleOutlineIcon style={{width: 36, height: 36, fill: "green"}} />
        <br />
        <div style={{fontSize: 24, whiteSpace: "nowrap", color: "#fff", userSelect: "none"}}>Product is ordered to cart successfully.</div>
    </div>
  )
}

export default OrderSuccess