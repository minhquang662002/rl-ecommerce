import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { help } from '../../action/admin/support/help';
import { Button, CircularProgress, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Help = (props) => {
  const [texthelp, settexthelp]= useState(()=> "")
  const [loading, setloading]= useState(()=> false)
  const [opensnackbar, setopensnackbar]= useState(()=> false)
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={()=> setopensnackbar(()=> false)}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=> setopensnackbar(()=> false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
        <Helmet>
            <title>Help center - Unilight</title>
        </Helmet>
        <div style={{width: "100%", height: "100%", minHeight: "100vh", backgroundColor: "#f2f0f5"}}>
            <div style={{width: "100%", height: 60, display: "flex", justifyContent: 'space-between',padding: "0 50px", alignItems: "center", backgroundColor: "#fff"}}>
                <div style={{display: "flex", fontSize: 24, fontWeight: 600, cursor: "pointer"}}>Unilight - Help center</div>
                <div style={{display: "flex", justifyContent: "center", alignItems: 'center', gap: 16}}>
                    <img src={props.avt_user} alt="" style={{width: 40, height: 40, borderRadius: "50%", objectFit: "cover", }} />
                    <div style={{display: "flex", fontSize: 18, fontWeight: 600}}>{props.firstname}</div>
                </div>
            </div>
            <div style={{width: "100%",position: "absolute", maxWidth: 600, top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "auto", borderRadius: 10, backgroundColor: "#fff", display: "flex", alignItems: "center", flexDirection: "column", padding: 10}}>
                <HelpCenterIcon style={{width: 150, height: 150}} />
                <br />
                <div style={{fontSize: 32, fontWeight: 600}}>Help center</div>
                <br />
                <div style={{textAlign: 'center'}}>Hello,{props.firstname}, if you need any support, enter the form below, we always ready support you.</div>
                <br />
                <div style={{width: "100%"}}>
                    <textarea value={texthelp} onChange={(e)=> settexthelp(e.target.value)} placeholder="Enter text to here. Wee will see it and help you (less than 20 words)" style={{padding: 10,fontSize: 16 ,border: "1px solid #cecece", outlineColor: "#2e89ff", resize: "none", width: "100%", borderRadius: 10}} name="" id="" cols="30" rows="10">

                    </textarea>
                </div>
                <br />
                <button disabled={texthelp?.length < 20 ? true : false} onClick={()=> help(setloading, setopensnackbar, texthelp, props.id_user, settexthelp)} style={{cursor: texthelp?.length < 20 ? "not-allowed" : "pointer",width: 120, height: 46, borderRadius: 10, background: "#2e89ff", color: "#fff", fontWeight: 600, display: "flex", justifyContent: 'center',alignItems: 'center', border: "none", outline: "none", fontSize: 16, opacity: texthelp?.length < 20 ? 0.3 : 1}}>
                    {
                        loading === true ? 
                        <CircularProgress style={{width: 16, height: 16, color: "#fff"}} />
                        : 
                        "Send"
                    }
                </button>
            </div>
        </div>
        <Snackbar
        open={opensnackbar}
        autoHideDuration={6000}
        onClose={()=> setopensnackbar(()=> false)}
        message="Your message is sent successfully"
        action={action}
      />
    </>
  )
}

export default Help