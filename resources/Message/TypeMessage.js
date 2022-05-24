import React, { useState, useEffect } from "react"
import SendIcon from "@mui/icons-material/Send"
import ImageIcon from "@mui/icons-material/Image"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import CloseIcon from '@mui/icons-material/Close'
import axios from "axios"
import nprogress from "nprogress"

const TypeMessage = (props) => {
  let formData= new FormData()
  const [text, setText]= useState(()=> "")
  const sendWithEnter= (e)=> {
    if(text.trim()?.length> 0){ 
        if(e.key=== "enter" || e.key=== "Enter") {
            // 
            props.addMessage(text, props.id_conversation, props.id_user, "text", parseInt(new Date().getTime()) + 7* 72000, (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1), props.avt_user, props.lastname)
            setText(()=> "")
            return
        }
    }
  }
  const sendMessageClick= async (type)=> {
    listPreviewImg?.map((item, key)=> formData.append("img-"+key, item))
    if(props.previewImg=== true) {
        try {
            axios.interceptors.request.use(request=> {
                nprogress.remove()
                return request
            })
            axios.interceptors.response.use(response=> {
                nprogress.remove()
                return response
            })
            const res= await axios.post("http://localhost:8000/get/path/image/message", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                timeout: 35000,
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
                maxContentLength: 10000000000000
            })
            const result= await res.data
            props.setPreviewImg(()=> false)
            result?.map((item)=> props.addMessage(item, props.id_conversation, props.id_user, type, parseInt(new Date().getTime()) + 7* 72000, (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1), props.avt_user, props.lastname))
            return
        } catch (error) {
            console.log(error)
        }
    }
    props.addMessage(text, props.id_conversation, props.id_user, "text", parseInt(new Date().getTime()) + 7* 72000, (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1), props.avt_user, props.lastname)
    setText(()=> "")
    return
  }
  const [as, setas]= useState(()=> false)
  const messageImage= (e)=> {
    const files= e.target.files
    if(files?.length > 0) {
        props.setPreviewImg(()=> true)
        setas(()=> true)
    }
    Object.values(files).map((item, key)=> {
        formData.append("img-"+key, item)
        setListPreviewImg(prev=> ([...prev, item]))
        return 
    })
    Object.values(files).map((item, key)=> setPi(prev=> ([...prev, {i: URL.createObjectURL(item), d: item.lastModified, k: key}])))
  }
  const [listPreviewImg, setListPreviewImg]= useState(()=> [])
  const [pi, setPi]= useState(()=> [])
  const handlePi= ()=> {
    if(pi.length <=1 ) {
        props.setPreviewImg(()=> false)
    }
  }
  return (
    <div className="pr4" style={{display: "flex",width: "100%", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", position: "absolute", bottom: 0, left: 0, backgroundColor: "#fff", height: props.previewImg=== false ? 60 : 170}}>
        {
            (props.previewImg=== true && as=== true )&& <div className="pi6" style={{width: "94%", height: 100, overflowX: "auto", display: "flex", alignItems: "center", gap: 10, overflowY: "hidden"}}>
                {
                    pi?.length> 0 && pi.map((item, key)=> <div key={key} className="dk2" style={{width: 48, height: 48, minWidth: 48, minHeight: 48,padding: "0 10px", position: "relative"}} data-img-preview={`img-${parseInt(key)+ 1}`}>
                        <img src={item.i} alt="open" className="or2" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 8, minWidth: 48, minHeight: 48}} />
                        <div className="cs3" 
                        style={{width: 26, height: 26, borderRadius: "50%", display: "flex", justifyContent: 'center',alignItems: "center", border: "1px solid #dad5d5",
                        backgroundColor: "#fff", position: "absolute", top: 0, right: 0, zIndex: 99, transform: "translate(10px, -10px)", cursor: "pointer"}} 
                        onClick={()=> {setListPreviewImg(listPreviewImg?.filter((item2)=> item2.lastModified != item.d));setPi(pi.filter((v, i)=> i !=( key ))); handlePi()}}>
                            <CloseIcon style={{width: 20, height: 20}} />
                        </div>
                    </div>)
                }
            </div>
        }

        <div className="vj3" style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 10, width: "100%", padding: 5, backgroundColor: "#fff"}}>
            <div className="ew3 hv4" style={{width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer"}}>
                <label className="le3" style={{width: 26, height: 26}}>
                    <ImageIcon style={{fill: "#686868", width: 26, height: 26, cursor: "pointer"}} />
                    <input type="file" multiple style={{visibility: "hidden"}} accept="image/png, image/gif, image/jpeg, image/jpg" onChange={(e)=> messageImage(e)} />
                </label>
            </div>
            <div className="wi2" style={{width: "92%", height: 40, display: "flex", alignItems: "center"}}>
                <input onKeyUp={(e)=> sendWithEnter(e)} onChange={(e)=> setText(e.target.value)} value={text} className="wo4" style={{padding: 10, borderRadius: 80, backgroundColor: "#e4e6eb", width: "100%"}} placeholder="Enter your message" />
            </div>
            <div className="kf3 hv4" style={{width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer"}}>
                <div onClick={()=> sendMessageClick(props.previewImg=== true ? "image" : "text")} className="ow3" style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center',alignItems: "center"}}>
                    {
                        (text.trim()?.length > 0 || props.previewImg=== true) && <SendIcon style={{fill: "#2e89ff", width: 26, height: 26}} />
                    }
                    {
                        (text.trim()?.length <= 0 && props.previewImg=== false) && <ThumbUpIcon style={{fill: "#2e89ff", width: 26, height: 26}} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TypeMessage