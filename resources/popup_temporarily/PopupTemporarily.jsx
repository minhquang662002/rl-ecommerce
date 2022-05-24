import React, { useEffect } from 'react'

const fakesleep = (ms)=> new Promise(resolve=> setTimeout(resolve, ms))
const PopupTemporarily = (props) => {
  useEffect(()=> {
    (async ()=> {
        await fakesleep(3000)
        props.setShowPopup(()=> false)
    })()
  }, [props.showPopup])
  return (
    <div style={{padding: 8, borderRadius: 10, backgroundColor: "rgba(0,0,0,0.5)", color: "#fff", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        {props.message}
    </div>
  )
}

export default PopupTemporarily