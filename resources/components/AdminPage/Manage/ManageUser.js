import { CircularProgress } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Route, Routes } from 'react-router-dom'
import { load_list_user } from '../../../action/admin/user/load_list_user'
import InteractUser from './InteractUser/InteractUser'

const ManageUser = (props) => {
  const [loading, setloading] =useState(()=> false)
  const [data, setdata]= useState(()=> [])
  useEffect(()=> {
    load_list_user(setloading, setdata)
  }, [])
  return (
    <>
    <Helmet>
        <title>Manage user - Unilight</title>
    </Helmet>
    <div style={{width: "100%", height: "auto", padding: "10px 50px"}}>
        <Routes>
            <Route path="/" element={<ListUser data={data} loading={loading} />}></Route>
            <Route path='/id/:id' element={<InteractUser />} ></Route>
        </Routes>
    </div>
    </>
  )
}
const ListUser= (props)=> {
    return (
        <>
            {
                props.loading=== true && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',}}><span style={{fontSize: 18, fontWeight: 600,}}>Loading&nbsp;&nbsp;&nbsp;</span><CircularProgress /></div>
            }
            {
                props.loading=== false && props.data?.length<=0 && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',fontSize: 18, fontWeight: 600,}}>Nothing to render</div>
            }
            {
                props.loading=== false && props.data?.length>0 && props.data?.map((item, key)=> <ComponentUser key={key} {...item} />)
            }
        </>
    )
}
const ComponentUser= (props)=> {
    return (
        <Link to={"/admin/manage/user/id/"+props.id_user} style={{width: "100%", textDecoration: "none"}}>
            <div style={{width: "100%", display: 'flex', padding: 10, borderRadius: 10, border: "1px solid #c6c6c6d9", flexDirection: "column", margin: "40px 0", lineHeight: 1.8}}>
                <div style={{display: 'flex', alignItems: "center", gap: 20}}>
                    <img src={props.avt_user} alt="open" style={{width: 40, height: 40, borderRadius: "50%", objectFit: 'cover'}} />
                    <div style={{fontSize: 18, fontWeight: 600}}>{props.firstname} {props.lastname}</div>
                </div>
                <div>Email : <strong style={{fontSize: 18}}>{props.email || "_"}</strong></div>
                <div>Joined : <strong style={{fontSize: 18}}>{moment(`${props.created_at}`, 'YYYY-MM-DD hh:mm:ss').fromNow() || "_"}</strong></div>
                <div>Detail adress : <strong style={{fontSize: 18}}>{props.detail_address || "_"}</strong></div>
                <div>Phonenumber : <strong style={{fontSize: 18}}>{props.phone_number || "_"}</strong></div>
                <div>Gender : <strong style={{fontSize: 18}}>{(props.gender== 1 ? "Male" : "Femail" ) || "_"}</strong></div>
                <div>Birthday : <strong style={{fontSize: 18}}>{parseInt(props.date_of_birth)>0 && props.date_of_birth+"/"+props.month_of_birth+"/"+props.year_of_birth || "_"}</strong></div>
            </div>
        </Link>
    )
}

export default ManageUser