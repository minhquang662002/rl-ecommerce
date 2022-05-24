import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { memo } from 'react'
import { ContainerComment } from './ListComment'

const fakesleep= (ms)=> new Promise(res=> setTimeout(res, ms))
const ComponentLoadMore = (props) => {
    const [data, setData]= useState(()=> [])
    const [page, setPage]= useState(()=> 2)
    const [loading, setLoading]= useState(()=> false)
    const [outofData, setOutOfData]= useState(()=> false)
    const [s, setS]= useState(()=> "")
    useEffect(()=> {
        window.addEventListener("scroll", behaviorscroll)
        return ()=> window.removeEventListener("scroll", behaviorscroll)
    })
    const behaviorscroll= ()=> {
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if(outofData=== false) {
                lm()
            }
        }
    }
    const lm= async ()=> {
        if(outofData=== false) {
            setLoading(()=> true)
            await fakesleep(1000)
            try {  
                const res= await axios({
                    url: "http://localhost:8000/comment/more/x/g/t",
                    method: 'get',
                    timeout: 10000,
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                    },
                    xsrfCookieName: 'qwerty',
                    xsrfHeaderName: 'token',
                    withCredentials: false,
                    responseType: "json",
                    params: {
                        id_comment: props.id_comment,
                        page: page
                    }
                })
                const result= await res.data
                if(result?.length > 0) {
                    setLoading(()=> false)
                    setOutOfData(()=> false)
                    setPage(prev=> (prev+ 1))
                    return setData(()=> data.concat(result))
                }
                else {
                    return setOutOfData(()=> true)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <>
            {
                data?.length>0 && data?.map((item, key)=> <ContainerComment key={key} {...item} x={props.x} />)
            }
            {
               outofData===false && loading=== true && <div style={{width: "100%", height: 60, display: 'flex', justifyContent: 'center',alignItems: "center"}}><CircularProgress /></div>
            }
            {
                outofData=== true && <div style={{textAlign: "center"}}>No any comment in this product.</div>
            }
        </>
    )
}

export default memo(ComponentLoadMore)