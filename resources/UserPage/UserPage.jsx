import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { NavContext } from '../components/context/NavContext'
import AvatarUser from './AvatarUser'
import NameUser from './NameUser'

export const ContextForUser= createContext()
const UserPage = (props) => {
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
    <ContextForUser.Provider value={{avt_user: props.in4[0]?.avt_user, firstname: props.in4[0]?.firstname, lastname: props.in4[0]?.lastname}}>
      <div ref={ref} style={{width: 500, height: 'calc(100%)',transform:
      navChoices.login || navChoices.register
          ? "translateX(0)"
          : "translateX(101%",transition: "transform 0.2s linear", backgroundColor: "#fff", position: 'fixed', right: 0, top: 0, zIndex: 998, padding: 10}}>
              <AvatarUser  />
              <NameUser />
          </div>
    </ContextForUser.Provider>
  )
}

export default UserPage