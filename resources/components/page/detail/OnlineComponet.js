import React, { useEffect, useState } from 'react'
import { gol } from '../../../firebase/online/fon'

const OnlineComponet = (props) => {
  const [online, setOnline]= useState(()=> 0)
  useEffect(()=> {
    gol(props.author_shop, setOnline)
    const cw= setInterval(()=> gol(props.author_shop, setOnline), 10000)
    return function cleanup() {
        clearInterval(cw)
    }
  }, [])
  return (
    <div>
        {online}
    </div>
  )
}

export default OnlineComponet