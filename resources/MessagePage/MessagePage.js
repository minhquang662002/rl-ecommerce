import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ContainerList from './ContainerList'
import MainChat from './MainChat'
import { Helmet } from 'react-helmet-async';

const MessagePage = (props) => {
    
    const [listm, setListm]= useState(()=> [])
    const [offset, setOffset]= useState(()=> 1)
    const [outofdata, setoutofdata]= useState(()=> false)
    useEffect(()=> {
        document.body.style.height= "100%"
        document.querySelector("html").style.height= "100%"
        document.querySelector("#root").style.height= "100%"
        document.querySelector(".oojt").style.height= "100%"

        return ()=> {
            document.body.style.height= "auto"
            document.querySelector("html").style.height= "auto"
            document.querySelector("#root").style.height= "auto"
            document.querySelector(".oojt").style.height= "auto"
            
        }
    },[])
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8000/message/conversation",
                method: "get",
                timeout: 10000,
                timeoutErrorMessage: "Time out login",
                headers: {
                    "X-CSRF-TOKEN": document.querySelector("meta[name='csrf-token']").getAttribute("content")
                },
                xsrfCookieName: document.querySelector("meta[name='csrf-token']").getAttribute("content"),
                xsrfHeaderName: "X-CSRF-TOKEN",
                withCredentials: false,
                validateStatus: (status)=> {
                    return status >= 200 && status < 300
                },
                maxRedirects: 10,
                responseType: "json",
                params: {
                    id_user: props.id_user
                }
            })
            const result= await res.data
            setListm(result)
        })()
    }, [props.id_user])
    useEffect(()=> {
        setOffset(()=> 1)       
    }, [])
  return (
    <div className="dkodps" style={{width: "100%", height: "calc(100% - 66.5px)", display: "flex", flexDirection: "row",}}>
        <Helmet>
            <title>Messages - Unilight</title>
        </Helmet>
        <ContainerList setoutofdata={setoutofdata} setOffset={setOffset} list_id_conversation={listm} id_user={props.id_user} />
        <MainChat setoutofdata={setoutofdata} outofdata={outofdata} offset={offset} setOffset={setOffset} {...props} />
    </div>
  )
}

export default MessagePage