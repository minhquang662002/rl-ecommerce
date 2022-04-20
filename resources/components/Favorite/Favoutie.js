import React, { useEffect, useState } from 'react'
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
import Product from "../../components/page/main/Product"
import "./Favoutie.sass"

const Favourite = () => {
  const [listFavoriteNoLogin, setListFavoriteNoLogin]= useState(()=> localStorage.getItem("item_favorite"))
  const [data, setData]= useState(()=> [])
  useEffect(()=> {
    (async ()=> {
      const res= await axios({
        url: 'http://localhost:8000/favorite/items',
        method: 'POST',
        timeout: 5000,
        timeoutErrorMessage: "Error",
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        data: {
          list: listFavoriteNoLogin?.split(","),
        }
      })
      try {
        const result= await res.data
        if(result?.f=== "true") {
          try {
            const res= await axios({
              url: 'http://localhost:8000/favorite/items/exist',
              method: 'POST',
              timeout: 5000,
              timeoutErrorMessage: "Error",
              headers: {
                  'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
              },
              xsrfCookieName: 'qwerty',
              xsrfHeaderName: 'token',
              withCredentials: false,
              data: {
                list: result[0],
              }
            })
            const result2= await res.data
            setData(result2)
          } catch (error) {
            console.log(error)
            setData(error)
          }
          

        }
        else {
          return setData(result)
        }

      } catch (error) {
        console.log(error)
        setData(error)
      }
      return ()=> setData(()=> [])
    })()
  },[])
  useEffect(()=> {
    setListFavoriteNoLogin(()=> localStorage.getItem("item_favorite"))
  }, [])
  if(data.length< 1) {
    return (
      <div className="loading" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
    )
  }
  else {
    return (
      <div className="favorite">
        <div className="favorite-title" style={{display: 'flex', justifyContent: 'center',alignItems: 'center',width: '100%', height: '200px', backgroundColor: "#767676", color: "#fff"}}>View your favorite products</div>
        <div className="favorite-container" style={{display: 'grid', justifyContent: 'center',alignItems: "center", gap: 30, height: "auto", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 50,marginLeft: "auto", marginRight: "auto" , width: ' calc( 100% - 60px )'}}>
            {
              data?.map((item, key)=> <Product key={key} item={item} section={item.classify} />)
            }
        </div>
      </div>
    )
  }
}

export default Favourite