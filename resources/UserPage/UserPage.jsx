import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { NavContext } from '../components/context/NavContext'
import AvatarUser from './AvatarUser'
import NameUser from './NameUser'
import SideInfo from './SideInfo'
import SideInfo2 from './SideInfo2'
import { Beforeunload } from 'react-beforeunload'
import { fon } from '../firebase/online/fon'

export const ContextForUser= createContext()
const UserPage = (props) => {
  useEffect(()=> {
    fon(0, localStorage.getItem("u_ol")?.toString())
  },[])
  const { navChoices, setNavChoices }= useContext(NavContext)
  const { ref, inView }= useInView({
      threshold: 0
  })
  const [check, setCheck]= useState(()=> false)
  useEffect(()=> {
    if(inView=== true) {
        setCheck(()=> true)
    }
    else {
        setCheck(()=> false)
    }
  }, [inView, check])    
  useEffect(()=> {
      if(check=== true){ 
        document.body.style.overflow= "hidden"
      }
      else {
        document.body.style.overflow= "auto"
      }
      return ()=> {
          document.body.style.overflow= "auto"
      }
  }, [check])
  return (
    <Beforeunload onBeforeunload={()=> fon((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1), localStorage.getItem("u_ol")?.toString())}>
      <ContextForUser.Provider value={{avt_user: props.in4[0]?.avt_user, firstname: props.in4[0]?.firstname, lastname: props.in4[0]?.lastname, email: props.in4[0]?.email}}>
        <div className="cp1" ref={ref} style={{width: 500, height: 'calc(100%)',transform:
        navChoices.login || navChoices.register
            ? "translateX(0)"
            : "translateX(101%",transition: "transform 0.2s linear", backgroundColor: "#fff", position: 'fixed', right: 0, top: 0, zIndex: 998, padding: 10, overflow: "auto"}}>
                <AvatarUser  />
                <NameUser />
                <SideInfo in4={props.in4} />
                <br />
                <SideInfo2 in4={props.in4} />
            </div>
      </ContextForUser.Provider>
    </Beforeunload>

  )
}

export default UserPage