import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const LoadingSuspense = () => {
  return (
    <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
  )
}

export default LoadingSuspense