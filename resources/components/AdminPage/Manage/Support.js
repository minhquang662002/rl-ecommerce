import { Button, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { help_from_admin } from '../../../action/admin/support/help_from_admin'
import moment from 'moment'
import { Link } from "react-router-dom"

const Support = (props) => {
  const [data, setdata]= useState(()=> [])
  const [loading, setloading]= useState(()=> false)
  useEffect(()=> {
    help_from_admin(setdata, setloading)
  }, [])
  return (
    <>
        <Helmet>
            <title>Support - Unilight</title>
        </Helmet>
        <div style={{width: "100%", height: "auto", padding: "0 50px", display: "flex", justifyContent: 'center', flexDirection: "column"}}>
          {
            loading=== false && data?.length <=0 && <div style={{fontWeight: 18}}>Nothing to render.</div>
          }
          {
            loading=== true && <div style={{width: "100%", height: 50, display: "flex", justifyContent: 'center',alignItems: 'center',}}>
              <CircularProgress />
            </div>
          }
          {
            loading=== false  && data?.length > 0 && data?.map((item, key)=> <ComponentSupport key={key} {...item} />)
          }
        </div>
    </>
  )
}
const ComponentSupport = (props)=> {
  const [openreply, setopenreply]= useState(()=> false)
  return (
     <div style={{width: "100%", maxWidth: 1024, padding: "10px", borderRadius: 10, border: "1px solid #555", margin: "16px 0", display: "flex", justifyContent: 'center',alignItems: "center"}}>
      <div style={{width: "100%"}}>
        
          <div style={{width: "100%", display: "flex", alignItems: 'center',}}>
            From:&nbsp;&nbsp;  <img src={props.avt_user} alt="" style={{width: 28, height: 28, borderRadius: "50%", objectFit: "cover"}} />&nbsp;&nbsp;<strong>{props.firstname} {props.lastname}</strong>
          </div>
          <br />
          <div>Id user: {props.id_user}</div>
          <br />
          <div>
            {props.text}
          </div>
          <br />
          <div style={{width: "100%", display: "flex", flexDirection: "row-reverse"}}>
            <strong> {moment(parseInt(props.time_send)).format("HH:mm DD-MM-YYYY")}</strong>Send:&nbsp; 
          </div>
          <br />
          <div style={{width: "100%", display: "flex", flexDirection: "row-reverse", gap: 16}}>
            <Button onClick={()=> setopenreply(prev=> !prev)} variant="contained">
              {openreply=== true ? "Cancel" : "Reply"}
            </Button>
            <Button variant="contained" color="error">
                Delete
            </Button>
            <Link to={"/admin/manage/user/id/"+ props.id_user} style={{textDecoration: "none"}}>
              <Button variant="contained" color={"info"}>
                  See status user
              </Button>
            </Link>
          </div>
          <br />
          {
            openreply=== true &&
            <>
              <div style={{width: "100%", padding: "10px"}}>
                <textarea placeholder="Reply user" style={{resize: "none", width:"100%", outlineColor: "#2e89ff", fontSize: 16, borderRadius: 10, padding: 10, border: "1px solid #000"}} name="" id="" cols="30" rows="10"></textarea>
              </div>
              <br />
              <div style={{display: "flex", width: "100%", flexDirection: "row-reverse"}}>
                &nbsp;&nbsp;<Button variant="outlined">Send</Button>
              </div>
            </>
          }
       </div> 
      </div>
  )
}

export default Support