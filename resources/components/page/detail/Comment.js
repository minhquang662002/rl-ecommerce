import React, { useEffect } from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import MenuListFilterComment from './FilterComment'
import Pusher from "pusher-js"
import axios from 'axios'
import ListComment from './ListComment'
import _ from "lodash"
import C1 from './C1'
import { p_notifications } from '../../../firebase/online/push_notifacation'

const Comment = (props) => {
  const [uda, setUda]= useState(()=> [])
  const [typing, setTyping]= useState(()=> false)
  const [t, setT]= useState(()=> 0)
  useEffect(()=> {
    const pusher= new Pusher("95583842a488fce99dee", {
        cluster: "ap1",
    })
    const channel= pusher.subscribe((props?.id_product)?.toString())
    channel.bind("send-comment", data=> {
        setUda(prev=> ([...prev, data]))
    })
    channel.bind('user-typing', data=> {
        if(data.lengthText?.length > 0) {
            setTyping(()=> true)
        }
        else {
            setTyping(()=> false)
        }
    })
    return ()=> channel.disconnect()
  }, [props?.id_product])
  const [text, setText]= useState(()=> "")
  const [filter, setFilter]= useState(()=> 0)
  const sendcomment= ()=> {
    p_notifications(props.author_shop, `${props.user_.firstname || props.user_.lastname}`, props.user_.avt_user, "just commented your product",props.id_product, )
    const p1= axios({
        url: "http://localhost:8000/comment/send/m",
        method: "post",
        timeout: 10000,
        headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        data: {
            id_comment: props?.id_product,
            id_user: props.buyer,
            content: text || "",
            type_comment: "text",
            timedl: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1),
            timeup: parseInt(new Date().getTime()) + 7* 72000,
            avt_user: props.user_?.avt_user,
            user_name: props.user_.firstname+  " "+props.user_.lastname,
            timem: parseInt(new Date().getTime())
        }   
    })
    const p2= axios({
        url: "http://localhost:8000/comment/usertyping/t/x",
        method: "get",
        timeout: 10000,
        headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        responseType: "json",
        params: {
            id_comment: props?.id_product,
            lengthText: ""
        }
    })
    Promise.all([p1, p2])
    if(text.trim()?.length > 0 ) {
        setT(prev=> prev+ 1)
    }
    if(text.trim().length > 0 && t+ 1==1) {
        axios({
            url: "http://localhost:8000/comment/usertyping/t/x",
            method: "get",
            timeout: 10000,
            headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                id_comment: props?.id_product,
                lengthText: text
            }
        })
    }
    if(text.trim().length < 1) {
        axios({
            url: "http://localhost:8000/comment/usertyping/t/x",
            method: "get",
            timeout: 10000,
            headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                id_comment: props?.id_product,
                lengthText: text
            }
        })
        setT(()=> 0)
    }
    return setText(()=> "")
  }
  const usertyping= (e)=> {
    if((e.key== "enter" || e.key== "Enter") && e.target.value.length > 0) {
        p_notifications(props.author_shop, `${props.user_.firstname || props.user_.lastname}`, props.user_.avt_user, "just commented your product",props.id_product, )
        const p1= axios({
            url: "http://localhost:8000/comment/send/m",
            method: "post",
            timeout: 10000,
            headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            data: {
                id_comment: props?.id_product,
                id_user: props.buyer,
                content: text || "",
                type_comment: "text",
                timedl: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1),
                timeup: parseInt(new Date().getTime()) + 7* 72000,
                avt_user: props.user_?.avt_user,
                user_name: props.user_.firstname+  " "+props.user_.lastname,
                timem: parseInt(new Date().getTime())
            }   
        })
        const p2= axios({
            url: "http://localhost:8000/comment/usertyping/t/x",
            method: "get",
            timeout: 10000,
            headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                id_comment: props?.id_product,
                lengthText: ""
            }
        })
        Promise.all([p1, p2])
        return setText(()=> "")
    }   
    if(e.target.value.trim()?.length > 0 ) {
        setT(prev=> prev+ 1)
    }
    if((e.target.value).trim().length > 0 && t+ 1==1) {
        axios({
            url: "http://localhost:8000/comment/usertyping/t/x",
            method: "get",
            timeout: 10000,
            headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                id_comment: props?.id_product,
                lengthText: text
            }
        })
    }
    if(e.target.value.trim().length < 1) {
        axios({
            url: "http://localhost:8000/comment/usertyping/t/x",
            method: "get",
            timeout: 10000,
            headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                id_comment: props?.id_product,
                lengthText: text
            }
        })
        setT(()=> 0)
    }
  }
  return (
    <div className="sd3" style={{width: "100%", padding: "10px 20px 10px 10px"}}>
        <div className="ew5" style={{width: "100%", fontSize: 24, fontWeight: 600, color: "#242526"}}>Comment</div>
        {
            props?.user_?.avt_user &&
            <CommentType sendcomment={sendcomment} {...props} text={text} setText={setText} usertyping={usertyping} />
        }
        <FilterM {...props} filter={filter} setFilter={setFilter} />
        <div className="ds5">
            <C1 id_comment={props?.id_product}>
                <ListComment id_comment={props?.id_product} uda={uda} typing={typing} x={props.buyer} />
            </C1>
        </div>
    </div>
  )
}
const CommentType= React.memo((props)=> {
    return (
        <div className="el4" style={{display: "flex", width: "100%", height: 80, justifyContent: "space-between", alignItems: "center", gap: 10}}>
            <div className="d32" style={{}}>
                <img src={props.user_?.avt_user} alt="open" style={{width: 48, height: 48, objectFit: "cover", borderRadius: "50%"}} />
            </div>
            <div className="ds4" style={{width: "calc(100% - 50px)", height: "100%", display: "flex", justifyContent: 'center',alignItems: 'center',}}>
                <input onKeyUp={(e)=> props.usertyping(e)} type="text" className="reik5" onChange={(e)=> props.setText(e.target.value)} value={props.text} style={{width: "100%", height: 48, padding: "0 10px", borderRadius: 80, border: "1px solid #e1d6d6", fontSize: 16  }} placeholder="Enter your comment" />
            </div>
            {
                props.text.trim().length > 0 &&
                <CSSTransition in={true} timeout={200} classNames="tr-but">
                    <div className="ds3">
                        <button onClick={()=> props.sendcomment()} className="wew3" style={{padding: '14px 20px', display: 'flex', justifyContent: 'center',alignItems: "center", borderRadius: 80, backgroundColor: "#2e89ff", color: "#fff", cursor: "pointer", }}>Post</button>
                    </div>
                </CSSTransition>
            }
        </div>
    )
})
const FilterM= React.memo((props)=> {
    return (
        <div className="fk3" style={{width: '100%', height: 60, display: 'flex', justifyContent: "space-between", alignItems: 'center',}}>
            <div className="dj3" style={{fontSize: 20, fontWeight: 600, color: "#242526"}}>
                {
                    props.filter=== 0 && "Lastest"
                }
                {
                    props.filter===1 && "Oldest"
                }
                {
                    props.filter===2 && "Most popular"
                }
            </div>
            <div className="ke3">
                <MenuListFilterComment filter={props.filter} setFilter={props.setFilter} />
            </div>
            
        </div>
    )
})

export default Comment