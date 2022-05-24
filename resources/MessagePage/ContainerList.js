import React from 'react'
import LConversation from './LConversation'

const ContainerList = (props) => {
  return (
    <div style={{width: 350, height: "100%",padding: 10, borderRight: "1px solid #ececec", marginRight: 10}}>
      <div style={{fontSize: 24, fontWeight: 600, color: "#242526", marginBottom: 25}}>Chats</div>
      {
        props.list_id_conversation && props.list_id_conversation?.map((item, key)=> <LConversation setoutofdata={props.setoutofdata} setOffset={props.setOffset} id_conversation={item?.id_conversation} id_user={props.id_user} key={key} />)
      }
    </div>
  )
}

export default ContainerList