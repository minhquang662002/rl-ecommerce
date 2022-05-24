import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import _ from "lodash"
import Pusher from "pusher-js"
import ListMessage from '../Message/ListMessage'
import TypeMessage from '../Message/TypeMessage'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import { loadmoremessage } from '../Message/loadmoremessage'
import CircularProgress from '@mui/material/CircularProgress'

const MainChat = (props) => {
    useEffect(()=> {
        document.body.style.overflow= "hidden"
        return ()=> document.body.style.overflow= "auto"
    }, [])
    const { id }= useParams()
    const [previewImg, setPreviewImg]= useState(()=> false)

    useEffect(()=> {
    const pusher= new Pusher("95583842a488fce99dee", {
        cluster: "ap1",
    })
    const channel= pusher.subscribe((id)?.toString())
    channel.bind("my-event", (data)=> {
        setConversation(prev=> ([...prev, { type_message: data.type_message, timeup: data.timeup, timedl: data.timedl, user_id: data.id_user, message: data.message, avt_user: data.avt_user, lastname: data.lastname, id_conversation: data.id_conversation}]))
    })
    return ()=> channel.disconnect()
    }, [id])
    const [conversation, setConversation]= useState(()=> [])
    useEffect(()=> {
        t()
    }, [id])
  const t= async ()=> {
    props.setOffset((prev)=> parseInt(parseInt(prev) +1) )
    const res= await axios({
        url: "http://localhost:8000/message/chat/conversation",
        method: "get",
        timeout: 10000,
        timeoutErrorMessage: "Time out login",
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
        xsrfHeaderName: 'X-CSRF-TOKEN',
        withCredentials: false,
        validateStatus: (status)=> {
            return status >= 200 && status < 300
        },
        maxRedirects: 10,
        responseType: "json",
        params: {
            id_conversation: id,
            page: props.offset
        }
    })
    const result= await res.data
    setConversation(_.orderBy(result, ['timeup'], ['asc']))

  }
  const addMessage= async (message, id_conversation, id_user, type_message, timeup, timedl, avt_user, lastname) => {
        await axios.post("/chat/message", {
            message: CryptoJS.AES.encrypt(message, 'secret key giang12345').toString(),
            id_conversation,
            id_user,
            type_message,
            timeup,
            timedl,
            avt_user,
            lastname
        })  
    }
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(()=> {
        scrollToBottom()
    }, [conversation])
    const [loading, setLoading]= useState(()=> false)
    const scrollRef= useRef(null)
    const loadmore= async ()=> {
        if(props.outofdata===false) {
            if(scrollRef.current.scrollTop==0) {
                await loadmoremessage(id, props.offset, props.setOffset, 1, setConversation, conversation, props.setoutofdata, setLoading)
                scrollRef.current.scrollTop=500
                return
                
            }
        }    
    }
  return (
    <div className="dkdsvdnjer" style={{width: "calc(100% - 360px)", height: "calc(100% - 66.5px)"}} >
        <div style={{height: 60}}></div>
            <div onScroll={()=> loadmore()} ref={scrollRef} style={{height: "calc(100% - 64px)", width: "100%", overflow: "auto", position: "relative"}}>
                {
                    loading=== true && <div style={{width: "100%", display: "flex",justifyContent: 'center',alignItems: "center", position: "absolute", top: 0, left: 0}}><CircularProgress /></div>
                }
                {
                    conversation && conversation?.map((item ,key)=> <ListMessage {...item} key={key} id_user={props.id_user} />)
                }
                <div ref={messagesEndRef} />
            </div>
        <div style={{height: 60, width: "100%", position: "relative "}}>
            <TypeMessage setPreviewImg={setPreviewImg} previewImg={previewImg} avt_user={props.avt_user} lastname={props.lastname} addMessage={addMessage} id_conversation={id} id_user={props.id_user} />
        </div>
    </div>
  )
}

export default MainChat