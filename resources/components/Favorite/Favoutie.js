import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
import Product from "../../components/page/main/Product"
import "./Favoutie.sass"
import { MyContext } from '../../ContextApp/ContextContainer'
import { Helmet } from 'react-helmet-async';

const Favourite = (props) => {
  const [listFavoriteNoLogin, setListFavoriteNoLogin]= useState(()=> localStorage.getItem("item_favorite"))
  const { setLengthFavorite }= useContext(MyContext)
  const [data, setData]= useState(()=> [])
  console.log(props.id_user)
  useEffect(()=> {
    (async ()=> {
      try {
        const res= await axios({
          url: 'http://localhost:8000/favorite/items',
          method: 'get',
          timeout: 5000,
          timeoutErrorMessage: "Error",
          headers: {
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
          },
          xsrfCookieName: 'qwerty',
          xsrfHeaderName: 'token',
          withCredentials: false,
          params: {
            list: listFavoriteNoLogin?.split(",") || [],
  
          }
        })
        const result= await res.data
        
        try {
          if(result?.f=== "true") {
            try {
              const res= await axios({
                url: 'http://localhost:8000/favorite/items/exist',
                method: 'get',
                timeout: 5000,
                timeoutErrorMessage: "Error",
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
                params: {
                  id_user: props.id_user
                }
              })
              const result2= await res.data
              setData(result2)
              setLengthFavorite(result2?.length)
            } catch (error) {
              setData("hihi")
              console.log(error)
            }
          }
          else {
            return setData(result)
          }
  
        } catch (error) {
          console.log(error)
          setData(error)
        }
      } catch (error) {
        setData("hihi")
        console.log(error)
        return
      }
    })()
  },[props.id_user])
  useEffect(()=> {
    setListFavoriteNoLogin(()=> localStorage.getItem("item_favorite"))
  }, [])
  if(data.length< 1) {
    return (
      <>
        <Helmet>
          Loading...
        </Helmet>
        <div className="loading" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute'}}> <CircularProgress /></div>
      </>
    )
  }
  else {
    return (
      <div className="favorite">
        <Helmet>
          <title>Favorite - Unilight</title>
        </Helmet>
        <div className="favorite-title" style={{display: 'flex', justifyContent: 'center',alignItems: 'center',width: '100%', height: '200px', backgroundColor: "#767676", color: "#fff"}}>View your favorite products</div>
        <div className="favorite-container" style={{display: 'grid', justifyContent: 'center',alignItems: "center", gap: 30, height: "auto", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 50,marginLeft: "auto", marginRight: "auto" , width: ' calc( 100% - 60px )', padding: 20}}>
            {
              (typeof data=="string" && data== "hihi" ) && "You don't have favorite product."
            }
            {
              (typeof data =="object" && data?.length > 0) && data?.map((item, key)=> <Product key={key} item={item} section={item.classify} />)
            }
        </div>
      </div>
    )
  }
}

export default Favourite