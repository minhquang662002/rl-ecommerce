import React, { useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from "react-router-dom"

const sleep = ms => new Promise(r => setTimeout(r, ms))
const Loading = () => {
    const navigate= useNavigate()
    useEffect(()=> {
        (async()=> {
            await sleep(1000)
            navigate("/", {replace: true})
        })()
    })
  return (
    <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
  )
}

export default Loading
