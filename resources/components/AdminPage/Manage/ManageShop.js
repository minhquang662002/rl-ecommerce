import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route, Link } from 'react-router-dom'
import { load_list_shop } from '../../../action/admin/shop/load_list_shop'
import InteractShop from './InteractShop/InteractShop'

const ManageShop = () => {
  const [loading, setloading] =useState(()=> false)
  const [data, setdata]= useState(()=> [])
  useEffect(()=> {
    load_list_shop(setloading, setdata)
  }, [])
  return (
    <>
        <Helmet>
            <title>Manage shop - Unilight</title>
        </Helmet>
        <div style={{width: "100%", height: "auto", padding: "10px 50px"}}>
        <Routes>
            <Route path="/" element={<ListShop data={data} loading={loading} />}></Route>
            <Route path='/id/:id' element={<InteractShop />} ></Route>
        </Routes>
    </div>
    </>
  )
}
const ListShop= (props)=> {
  return (
      <>
        {
            props.loading=== true && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',}}><span style={{fontSize: 18, fontWeight: 600,}}>Loading&nbsp;&nbsp;&nbsp;</span><CircularProgress /></div>
        }
        {
            props.loading=== false && props.data?.length<=0 && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',fontSize: 18, fontWeight: 600,}}>Nothing to render</div>
        }
        {
            props.loading=== false && props.data?.length>0 && props.data?.map((item, key)=> <ComponentShop key={key} {...item} />)
        }
      </>
  )
}
const ComponentShop= (props)=> {
  return (
      <Link to={"/admin/manage/shop/id/"+props.id_shop} style={{width: "100%", textDecoration: "none"}}>
          <div style={{width: "100%", display: 'flex', padding: 10, borderRadius: 10, border: "1px solid #c6c6c6d9", flexDirection: "column", margin: "40px 0", lineHeight: 1.8}}>
              <div style={{display: 'flex', alignItems: "center", gap: 20}}>
                  <img src={props.avatar_shop} alt="open" style={{width: 40, height: 40, borderRadius: "50%", objectFit: 'cover'}} />
                  <div style={{fontSize: 18, fontWeight: 600}}>{props.name_shop} </div>
              </div>
          </div>
      </Link>
  )
}
export default ManageShop