import React, { useState } from 'react'
import { NetworkStatus, useQuery } from '@apollo/client'
import { feCo } from '../../../graphql/query/fetchcomment'
import moment from "moment"
import ComponentLoadMore from './ComponentLoadMore'

const ListComment = (props) => {
//
  const [page, setPage]= useState(()=> 1)
  const {data, error, networkStatus }= useQuery(feCo, {
      variables: { id_comment: props.id_comment, page: page },
      pollInterval: 60000,
      notifyOnNetworkStatusChange: true
  })
  
  if(networkStatus=== NetworkStatus.refetch) return "Refetching!"
  return (
    <div style={{width: "100%", }}>
        
        {   
            error && <div>Error</div>
        }
        {
            props.typing && props.typing === true && 
            <div style={{height: 40,marginBottom: 25, display: 'flex', alignItems: 'center', gap: 10, marginLeft: 15}}>
                <div className="balls">
                    <div className="bf"></div>
                    <div className="bf"></div>
                    <div className="bf"></div>
                </div>
                <div>You or others are typing...</div>
            </div>
        }
        {
            props.uda && props?.uda?.map((item, key)=> <ContainerComment key={key} {...item} x={props.x} />)
        }
        {
            data && data?.comment.map((item, key)=> <ContainerComment key={key} {...item} x={props.x} />)
        }
        <ComponentLoadMore id_comment={props.id_comment} x={props.x} />
        
    </div>
  )
}
export const ContainerComment= (props)=> {
    return (
        <div className="gk4" style={{width: "100%", display: 'flex', alignItems: 'flex-start', gap: 15, padding: "0 10px", marginBottom: 15}}>
            <Avt {...props} />
            <G {...props} />
        </div>
    )
}
const Avt= (props)=> {
    return (
        <div className="cr7">
            <img src={props.avt_user || "http://1.gravatar.com/avatar/b92ca7fc711d8dbc7a544c0114a5b1e4?s=280&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D280&r=G"} alt="open" className="lm1" style={{width: 48, height: 48, minWidth: 48, borderRadius: "50%", objectFit: 'cover',  }} />
        </div>
    )
}
const G= (props)=> {
    return (
        <div className="vm5" style={{display: 'flex', flexDirection: 'column', }}>
            <div className='jk9' style={{display: 'flex', alignItems: 'center', gap: 5}}>
                <div className="na3" style={{textTransform: "capitalize",color: "#242526", fontWeight: 600, fontSize: 16}}>{props.user_name} {props.id_user== props.x && " (you) "}</div>
                <div style={{color: "#aaaaaa"}}>|</div>
                <div className='xk2' style={{color: "#aaaaaa", fontSize: 14}}>{moment(props.timedl, "YYYY-MM-DD hh:mm:ss a").fromNow()}</div>
            </div>
            <div style={{maxWidth: "80%"}}>
                {props.content}
            </div>
        </div>
    )
}

export default ListComment