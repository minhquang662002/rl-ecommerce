import Skeleton from '@mui/material/Skeleton'
import React, { useState } from 'react'
import ElementList from './ElementList'
import ScrollToBottom from 'react-scroll-to-bottom'
import C2 from './C2'

export const Container = (props) => {
  return (
    <>
      {props.toggle=== false && props.listm?.length > 0 && props?.listm.map((item, key)=> <ElementList setIdConversation={props.setIdConversation} offset={props.offset} setOffset={props.setOffset} id_user={props.id_user} setToggle={props.setToggle} key={key} {...item} setConversation={props.setConversation} />)}
      <ScrollToBottom className="gh3" mode="bottom">
        {props.toggle=== true && props.conversation?.length > 0 && <C2 setConversation={props.setConversation} idConversation={props.idconversation} offset={props.offset} setOffset={props.setOffset} previewImg={props.previewImg} conversation={props.conversation} id_user={props.id_user} />}
      </ScrollToBottom>
      {(props.conversation?.length<= 0 && props.toggle=== true) && Array.from(Array(7).keys()).map((item, key)=> <LoadingMessgae key={key} item={item} />)}
    </>
  )
}

const LoadingMessgae= (props)=> {
  return (
    <div className="lm3" style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8, padding: "10px 0", direction: parseInt(props.item) %2==0  ? "ltr" : "rtl"}}>
        <Skeleton className="pw2" variant="circular" style={{display: 'flex', justifyContent: 'center',alignItems: 'center', width: 40, height: 40, borderRadius: "50%", overflow: "hidden",}} />
        <Skeleton className="mg5" variant="rectangular" width={200} style={{padding: 5, borderRadius: 80, maxWidth: 200, whiteSpace: "pre-wrap", height: 40}} />
    </div>
  )
}


export default Container