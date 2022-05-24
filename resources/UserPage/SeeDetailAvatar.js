import React, {useEffect, useState} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import "./SeeDetailAvatar.sass"

const SeeDetailAvatar= (props)=> {
    const navigate= useNavigate()
    useEffect(()=> {
        document.body.style.overflow= "hidden"
        return ()=> document.body.style.overflow= "auto"
    }, [])
    const location = useLocation().state
    const [open, setOpen]= useState(()=> true)
    if(location?.id=== undefined) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', gap: 10}}>
                <div>Page has expired</div>
                <button onClick={()=> navigate("/")}  style={{borderRadius: 80, padding: '12px 30px', cursor: 'pointer'}}>Home</button>
            </div>
        )
    }
    else {
        return (
            <div style={{width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                <img className="mp32" src={location?.photo} alt="Open" style={{width: '90%', height: "90%", objectFit: "contain", zIndex: 100000}} />
                <BackgroundBlur blurPhoto={location?.photo} />
                <div className="m14" onClick={()=> navigate(-1)} style={{width: 40, height: 40, borderRadius: '50%', display: 'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: "#e4e6ea", position: "fixed", top: 0, right: 0, transform: 'translate(-50%, 50%)', zIndex: 100001, cursor: "pointer"}}>
                    <CloseIcon />
                </div>
            </div>
        )
    }
}
const BackgroundBlur= (props)=> {
    return (
        <div className="b-blue" style={{width: '110%', height: "110%", position: 'fixed', top: '-5%', left: '-5%', zIndex: 99999, }}>
            <img src={props.blurPhoto} alt="Open" style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(5px)'}} />
        </div>
    )
}

export default SeeDetailAvatar