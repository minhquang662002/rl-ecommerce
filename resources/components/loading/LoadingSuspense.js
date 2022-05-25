import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingSuspense = () => {
  return (
    <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
  )
}

const LoadingSuspense2= () => {
  return (
    <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'relative', display: 'flex', justifyContent: 'center',alignItems: 'center', height: 150}}> <CircularProgress /></div>
  )
}
const LoadingSuspense3= () => {
  return (
    <div style={{width: "100%", height: "100%", position: 'fixed', zIndex: 9999999, background: "rgba(0, 0, 0, 0.45)"}}>
      <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', position: 'absolute', justifyContent: 'center',alignItems: 'center', height: 150, color: "#fff", fontSize: 24, fontWeight: 600}}> <CircularProgress />&nbsp;&nbsp; Posting</div>
    </div>
  )
}

export default LoadingSuspense
export { LoadingSuspense2, LoadingSuspense3 }
