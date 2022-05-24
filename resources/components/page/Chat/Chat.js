import Pusher from "pusher-js"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Chat({username}) {
    const pusher= new Pusher("95583842a488fce99dee", {
        cluster: "ap1",
        authEndpoint: "api/pusher/auth",
        auth: {params: {username}}
    })
    const [chats, setChats]= useState([])
    const [message, setMessage]= useState("")
    const [onlineUsersCount, setOnlineUsersCount]= useState(0)
    const [onlineUser, setOnlineUser]= useState([])

    useEffect(()=> {
        let mounted= true
        if(mounted) {
            const channel= pusher.subscribe("my-channel")
        }
        return (()=> mounted= false)
    }, [])
    return (
        <div>
            Hi {username}, We're in chat !
        </div>
    )
}