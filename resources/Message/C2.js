import React, { useEffect, useRef } from 'react'
import ListMessage from './ListMessage'
import Pusher from "pusher-js"
import CryptoJS from 'crypto-js'

const C2 = (props) => {
  useEffect(()=> {
    const pusher= new Pusher("95583842a488fce99dee", {
        cluster: "ap1",
    })
    const channel= pusher.subscribe((props?.idConversation)?.toString())
    channel.bind("my-event", (data)=> {
      props.setConversation(prev=> ([...prev, { type_message: data.type_message, timeup: data.timeup, timedl: data.timedl, user_id: data.id_user, message: data.message, avt_user: data.avt_user, lastname: data.lastname, id_conversation: data.id_conversation}]))
    })
    return ()=> channel.disconnect()
  }, [props.idConversation])
  const ref= useRef(null)
  const scrollToBottom= ()=> {
      ref.current.scrollIntoView({behavior: "smooth"})
      document.querySelector(".Navbar").classList.add("ps3")
      
  }
  useEffect(()=> {
      scrollToBottom()
      return ()=> {
        ref?.current?.scrollIntoView({behavior: "smooth"})
        document.querySelector(".Navbar").classList.remove("ps3")
      }
  }, [props.conversation])
  // useEffect(()=> {
  //   if(props.conversation?.length < 15) {
  //     scrollToBottom()
  //   }
  // },[props.conversation?.length, props.previewImg])
  return (
    <>
      {
        props.conversation?.map((item, key)=> <ListMessage key={key} {...item} id_user={props.id_user} />)
      }
      <div ref={ref}>
      </div>
    </>
  )
}

export default C2