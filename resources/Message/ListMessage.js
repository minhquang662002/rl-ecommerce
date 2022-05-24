import React from 'react'
import CryptoJS from 'crypto-js'
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import Tooltip from '@mui/material/Tooltip'
import { handletime } from './handletime'


export const ListMessage = (props) => {
  return (
    <div className="lm3" style={{display: "flex", flexDirection: "row", gap: 5, padding: "10px 0",alignItems: "flex-end", direction: props.id_user === props.user_id ? "ltr" : "rtl"}}>
        <A user_id={props.user_id} avt_user={props.avt_user} />
        {
            props.type_message=== "start" && <div style={{width: "100%" }}>{props.message}</div>
        }
        {
            props.type_message=== "text" && <MTT message={props.message} id_user={props.id_user} user_id={props.user_id} timeup={props.timeup} /> 
        }
        {
            props.type_message=== "image" && <Link to={`/media/${uuidv4()}`} state={{id: uuidv4(), photo: CryptoJS.AES.decrypt(props?.message.toString(), "secret key giang12345").toString(CryptoJS.enc.Utf8)}}><MTI image={props.message} id_user={props.id_user} user_id={props.user_id} timeup={props.timeup} /></Link>
        }
    </div>
  )
}
const A= (props)=> {
    return (
        <div data-id-user={props.user_id} className="pw2" style={{display: 'flex', justifyContent: 'center',alignItems: 'center', width: 40, height: 40, borderRadius: "50%", overflow: "hidden",}}>
            <img className="jb4" src={props.avt_user} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
    )
}
const MTT= (props)=> {
    return (
        <Tooltip placement={props.id_user == props.user_id ? "left" : "right" } title={handletime(props.timeup)}>
            <div className="mg5" style={{padding: 5, borderRadius: 10, maxWidth: 200, whiteSpace: "pre-wrap", height: "auto", backgroundColor: props.id_user=== props.user_id ? "#2e89ff" : "#565252", color: props.id_user === props.user_id ? "#fff" : "#e4e6eb"}}>
                <div className="oq3" style={{direction: "ltr", padding: 5}}>
                {props?.message&& CryptoJS.AES.decrypt(props?.message.toString(), "secret key giang12345").toString(CryptoJS.enc.Utf8)}
                </div>
            </div>
        </Tooltip>
    )
}
const MTI= (props)=> {
    return (
        <Tooltip placement={props.id_user == props.user_id ? "left" : "right" } title={handletime(props.timeup)}>
            <div className="mt6" style={{width: 200, height: 180, borderRadius: 10, overflow: 'hidden',}}>
                <img className="eow4" src={props?.image&& CryptoJS.AES.decrypt(props?.image.toString(), "secret key giang12345").toString(CryptoJS.enc.Utf8)} alt="open" style={{widows: "100%", height: "100%", objectFit: "cover"}} />
            </div>
        </Tooltip>
    )
}

export default ListMessage