import axios from "axios"
import { useRef, useState } from "react"
import { useEffect } from "react"
import Container from "./Container"
import TypeMessage from "./TypeMessage"
import CryptoJS from "crypto-js"
import { useInView } from "react-intersection-observer"
import { loadmoremessage } from "./loadmoremessage"
import CircularProgress from "@mui/material/CircularProgress"
import NProgress from "nprogress"
// import { useDispatch } from "react-redux"
// import { echo } from "./setup"

const Messenger= (props)=> {
    // const dispatch= useDispatch()
    // const et= ["rko4", "nft1", "nf1", "mt6", "eow4", "oq3", "mg5", "jb4", "pw2", "lm3"]
    // const [text, setText]= useState(()=> ({
    //     message: "",
    //     type_message: "", 
    //     timeup: "",
    //     id_user: "",
    //     timedl: ""
    // }))
    const aref= useRef()
    const [listm, setListm]= useState(()=> [])
    const [conversation, setConversation]= useState(()=> [])
    const [previewImg, setPreviewImg]= useState(()=> false)
    const [toggle, setToggle]= useState(()=> false)
    const myRef= useRef()
    const [offset, setOffset]= useState(()=> 1)
    const [idconversation, setIdConversation]= useState(()=> "")
    const { ref, inView }= useInView({
        threshold: 0
    })
    const [datamore, setDatamore]= useState(()=> [])
    const [outofdata, setOutofdata]= useState(()=> false)
    const [loading, setLoading]= useState(()=> false)
    const clickOutSide= (e)=> { 
        
        if(props.openMessage=== true) {
            if(e.target.getAttribute("class")== "pw4") {
                return props.setOpenMessage(prev=> true)
            }
        }
        if((aref.current && !aref.current.contains(e.target))) {
            return props.setOpenMessage(prev=> false)
        }
    }
    
    const addMessage= (message, id_conversation, id_user, type_message, timeup, timedl, avt_user, lastname) => {
        axios.interceptors.request.use(request=> {
            NProgress.remove()
            return request
        })
        axios.interceptors.response.use(response=> {
            NProgress.remove()
            return response
        })
        axios.post("/chat/message", {
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
    useEffect(()=> {
        document.addEventListener("mousedown", clickOutSide)
        return ()=> document.removeEventListener("mousedown", clickOutSide)
    } ,[])
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
    
    const testScroll= async ()=> {
        if(outofdata=== false) {
            if(myRef.current.scrollTop== 0) {
                await loadmoremessage(listm[0]?.id_conversation, offset, setOffset, setDatamore, setConversation, conversation, setOutofdata, setLoading)
                myRef.current.scrollTop=500
            }
        }
    }
    
    return (
        <div ref={aref} onClick={()=> props.setOpenMessage(prev=> true)} className="nf1" style={{display: "flex", flexDirection: "column", width: 500, height: 600, backgroundColor: "#f2f0f5", position: "absolute", top: 30, right: 0, zIndex: 999, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <div className="nft1" style={{fontSize: 24, fontWeight: 600, padding: 10}}>Chats</div>
            
            <div ref={myRef} onScroll={(e)=> testScroll()} id="#sc2" className="als2" style={{padding: 10, height: previewImg=== false ? "83%" : "64%", position: "relative", overflow: "auto"}}>
                {
                    loading=== true &&
                    <div ref={ref} className="ew3" style={{width: "100%", height: 30, position: "absolute", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f2f0f5", zIndex: 999}}>
                        <CircularProgress style={{width: 24, height: 24}} />
                    </div>
                }
                {/* <input type="text" name="message" onChange={(e)=> setText(e.target.value)} value={text} />
                <button onClick={()=> addMessage(text)}>Click</button> */}
                <Container setIdConversation={setIdConversation} idconversation={idconversation} setConversation={setConversation} offset={offset} setOffset={setOffset} previewImg={previewImg} conversation={conversation} toggle={toggle} setToggle={setToggle} id_user={props.id_user} listm={listm} /> 
                {/* {
                    toggle=== true &&
                    <S />
                } */}
            </div>
            {
                toggle=== true &&
                <TypeMessage setPreviewImg={setPreviewImg} previewImg={previewImg} avt_user={props.avt_user} lastname={props.lastname} addMessage={addMessage} id_conversation={idconversation} id_user={props.id_user} />
            }
        </div>
    )
}   
// const S= (props)=> {
//     const refscroll= useRef()
//     const scrollToBottom= ()=> {
//         const scrollHeight= refscroll.current.scrollHeight
//         const height= refscroll.current.clientHeight
//         const maxScroll= scrollHeight - height
//         refscroll.current.scrollTop= maxScroll > 0 ? maxScroll : 0
//     }
//     useEffect(()=> {
//         scrollToBottom()
//         return ()=> scrollToBottom()
//     }, [])
//     return (
//         <div ref={refscroll}>
            
//         </div>
//     )
// }

export default Messenger