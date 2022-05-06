import React, {memo, useState, useEffect, useRef, useContext} from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import { upload_avt } from '../action/upload_avt'
import "./AvatarUser.sass"
import PopupTemporarily from '../popup_temporarily/PopupTemporarily'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4} from "uuid"
import { NavContext } from '../components/context/NavContext'
import { AContext } from '../components/page/account/AccountPage'

const A2 = (props) => {
  const [openPopup, setOpenPopup]= useState(()=> false)
  const [showPopup, setShowPopup]= useState(()=> false)
  const [message, setMessage]= useState(()=> "")
  const { avt_user }= useContext(AContext)
  const [avt_user_s, setAvt_user_s]= useState(()=> avt_user)
  useEffect(()=> {
      setAvt_user_s(()=> avt_user)
  }, [avt_user])
  return (
    <div className="u_avt" style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        <div className="ty1" style={{width: '100%', position: 'relative', display: 'flex',  alignItems: 'center'}}>
            <div className='container_avt' style={{width: 150, height: 150, position: "relative", overflow: "hidden"}}>
                <div className='eow' style={{width: '100%', height: '100%', borderRadius: '50%', overflow: "hidden", position: "relative"}}>
                    <img className="mp5" src={avt_user_s} style={{width: "100%", height: "100%", objectFit: "cover"}} alt="Open" referrerPolicy="no-referrer" draggable={false} onClick={()=> console.log(1)} />
                </div> 
            </div>
            <div className="igrate" style={{position: "absolute", bottom: 0, left: "20%", transform: "translate(-75%,0)", cursor: "pointer", zIndex: 10}}>
                <PhotoCameraIcon style={{fill: "#e4e6ea"}} onClick={()=> setOpenPopup(prev=> !prev)} />
                {
                    openPopup=== true &&
                    <Container2Below setOpenPopup={setOpenPopup} setShowPopup={setShowPopup} setAvt_user_s={setAvt_user_s} avt_user_s={avt_user_s} setMessage={setMessage} />
                }
            </div>
        </div>
        {
            showPopup!== false &&
        <PopupTemporarily showPopup={showPopup} setShowPopup={setShowPopup} message={message} />
        }
    </div>
  )
}

const Container2Below= (props)=> {
    const ref= useRef()
    const clickoutside= (e)=> {
        if(ref.current && !ref.current.contains(e.target)) {
            props.setOpenPopup(prev=> false)
        }
    }
    useEffect(()=> {
        document.addEventListener("click", clickoutside)
        return ()=> document.removeEventListener("click", clickoutside)
    }, [])
    return (
        <div ref={ref} style={{width: 300, padding: 10, display: 'flex', flexDirection: "column", position: 'absolute', bottom: "-350%", left: 0, zIndex: 99999999, backgroundColor: "#3a3b3c", color: "#fff"}}>
            <ChangeAvatar setOpenPopup={props.setOpenPopup} setShowPopup={props.setShowPopup} setAvt_user_s={props.setAvt_user_s} setMessage={props.setMessage} />
            <SeeDetailAvatar avt_user_s={props.avt_user_s} />
        </div>
        
    )
}
const ChangeAvatar= (props)=> {
    return (
        <div style={{width: '100%', height: 40, padding: 10}}>
            <label>
                <input type="file" accept=".jpg, .png, .jpeg, .gif, image/*" className="mkhogb32" style={{display: "none"}} onChange={(e)=> upload_avt(e.target.files, props.setOpenPopup, props.setShowPopup, props.setAvt_user_s, props.setMessage)} />
                <span style={{cursor: "pointer"}} aria-hidden={true}>Upload avatar</span>
            </label>
        </div>
    )
}
const SeeDetailAvatar= (props)=> {
    const navigate= useNavigate()
    const { setNavChoices2 }= useContext(NavContext)
    return (
        <div style={{width: "100%", height: 40, padding: 10}} onClick={()=> {setNavChoices2();navigate(`/media/${uuidv4()}`, { state: {id: uuidv4(), photo: props.avt_user_s} })}} >
            <span>See detail avatar</span>
        </div>
    )
}

export default A2