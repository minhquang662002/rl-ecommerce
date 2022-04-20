import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ResultSearch = (props) => {
  const [data, setData]= useState(()=> props.data)
  const [products, setProducts]= useState(()=> [])
  const [inside, setInside]= useState(()=> true)
  const ref= useRef()
  useEffect(()=> {
    setData(props.data)
  },[props.data])
  useEffect(()=> {
    document.addEventListener("mousedown", Clickoutside)
    return ()=> document.removeEventListener("mousedown", Clickoutside)
  }, [])
  const Clickoutside= (e)=> {
    console.log(e.target)
    if(e.target.getAttribute("placeholder")!== null && ref.current) {
      setInside(()=> true)
    }
    else if(e.target.getAttribute("class")=== "gioda" && ref.current) {
      setInside(()=> true)
    }
    else {
      setInside(()=> false)
    }

  }
  return (
    <>
      {
        <div ref={ref} className="repewk" onClick={()=> {setInside(()=> true);props.setValueSearch(()=> "")}}>
            {
            inside=== true &&
              data?.map((item, key)=> <Link key={key} to={`/collections/products/${item.title?.trim().toLowerCase().replaceAll(" ", "-")}`} state={{id_product: item.id_product}} ><div className="gioda" style={{padding: 10, width: '100%', boxSizing: "border-box", border: "1px solid #a29c9c", cursor: "pointer", userSelect: "none"}}>{item.title}</div></Link>)
            }
        </div>
      }
    </>
  )
}

export default ResultSearch