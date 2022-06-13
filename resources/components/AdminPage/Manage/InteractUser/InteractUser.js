import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, Snackbar } from '@mui/material'
import moment from 'moment'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { edit_name_user } from '../../../../action/admin/user/edit_name_user'
import { load_detail_user } from '../../../../action/admin/user/load_detail_user'
import { p_notifications } from '../../../../firebase/online/push_notifacation'
import LockIcon from '@mui/icons-material/Lock';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteIcon from '@mui/icons-material/Delete';
import LockClockIcon from '@mui/icons-material/LockClock';
import CloseIcon from '@mui/icons-material/Close';
import { lockaccount } from '../../../../action/admin/decision/lockaccount'
import { getstatususer } from '../../../../action/admin/decision/getstatususer'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { unlockaccount } from '../../../../action/admin/decision/unlockaccount'
import DateExecute from './DateExecute'
import { lockaccounttime } from '../../../../action/admin/decision/lockaccounttime'

const InteractUser = (props) => {
  const [loading, setloading]= useState(()=> false)
  const [data, setdata]= useState(()=> [])
  const { id }= useParams()
  useEffect(()=> {
    load_detail_user(setloading, setdata, id)
  }, [id])
  return (
    <div style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column"}}>
        {
            loading=== true && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',}}><span style={{fontSize: 18, fontWeight: 600,}}>Loading&nbsp;&nbsp;&nbsp;</span><CircularProgress /></div>
        }
        {
            loading=== false && data?.length<=0 && <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',fontSize: 18, fontWeight: 600,}}>Nothing to render</div>
        }
        {
            loading=== false && data?.length>0 && <DetailUser {...data[0]} />
        }
    </div>
  )
}

const DetailUser= (props)=> {
    const ref= useRef(null)
    const [editnamestate, seteditnamestate]= useState(()=> false)
    const editname= async ()=> {
        seteditnamestate(()=> true)
        await ref.current.setAttribute("contenteditable", true)
        await ref.current.focus()   
    }
    const donename= async ()=> {
        await p_notifications(props.id_user, "Admin", "https://cdn4.iconfinder.com/data/icons/man-user-human-person-profile-avatar-business/100/16-1User_10-3-512.png", "just changed your name to "+ref.current.innerText,"", "notifications/")
        seteditnamestate(()=> false)
        await ref.current.setAttribute("contenteditable", false)
        edit_name_user(props.id_user, ref.current.innerText)
    }
    const [opendialog, setopendialog]= useState(()=> ({
        open: false,
        title: "",
        titlesnackbar: "",
        status: 1,
    }))
    const [opensnackbar, setopensnackbar]= useState(()=> false)
    const [titlesnackbar, settitlesnackbar]= useState(()=> "")
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
    const [statususer, setstatususer]= useState(()=> [])
    useEffect(()=> {
        getstatususer(props.id_user, setstatususer)
    }, [props.id_user])
    const [openlocktime, setopenlocktime]= useState(()=> false)
    const [valuetime, setvaluetime]= useState(()=> new Date())
    return (
        <>
            <div>
                <img draggable={false} src={props.avt_user} alt="open" style={{width: 150, height: 150, borderRadius: "50%", objectFit: "cover"}} />
            </div>
            <br />
            <div>
                <span ref={ref} contentEditable={false} style={{fontSize: 24, fontWeight: 600}}>{props.firstname} {props.lastname}</span>&nbsp;&nbsp;&nbsp;&nbsp;{
                    editnamestate=== false ?
                    <span onClick={()=> editname()} style={{fontSize: 18, fontWeight: 600, color: "#2e89ff", cursor: "pointer", userSelect: "none"}}>Edit</span>:
                    <span onClick={()=> donename()} style={{fontSize: 18, fontWeight: 600, color: "#2e89ff", cursor: "pointer", userSelect: "none"}}>Done</span>
                }
            </div>
            <br />
            <div>
                <div>Email : <strong style={{fontSize: 18}}>{props.email || "_"}</strong></div>
                <br />
                <div>Joined : <strong style={{fontSize: 18}}>{moment(`${props.created_at}`, 'YYYY-MM-DD hh:mm:ss').fromNow() || "_"}</strong></div>
                <br />
                <div>Detail adress : <strong style={{fontSize: 18}}>{props.detail_address || "_"}</strong></div>
                <br />
                <div>Phonenumber : <strong style={{fontSize: 18}}>{props.phone_number || "_"}</strong></div>
                <br />
                <div>Gender : <strong style={{fontSize: 18}}>{(props.gender== 1 ? "Male" : "Femail" ) || "_"}</strong></div>
                <br />
                <div>Birthday : <strong style={{fontSize: 18}}>{parseInt(props.date_of_birth)>0 && props.date_of_birth+"/"+props.month_of_birth+"/"+props.year_of_birth || "_"}</strong></div>
            </div>
            <br />
            <div style={{width: "100%", maxWidth: 600, display: "flex", justifyContent: "space-between", alignItems: 'center', flexWrap: "wrap", gap: 10}}>
                {
                    statususer?.lock_account== 1 ?
                    
                    <div onClick={()=> {
                        setopendialog(prev=> ({...prev, open: true, title: "Are you sure want to unlock this account ?", titlesnackbar: "Unlock account was successfully", status: 2}))
                        }} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                        <LockOpenIcon color="success" />&nbsp;
                        <span style={{color: "green", fontSize: 18}}>Unlock account</span>
                    </div> 
                    :
                    <>
                        <div onClick={()=> {
                            setopendialog(prev=> ({...prev, open: true, title: "Are you sure want to lock this account ?", titlesnackbar: "Lock account was successfully", status: 1}))
                            }} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                            <LockIcon color="warning" />&nbsp;
                            <span style={{color: "#ed6c02", fontSize: 18}}>Lock account</span>
                        </div> 
                    </>
                }
                {/*  */}

                {
                    parseInt(statususer?.lock_temporary) > 10000 ?
                    <div onClick={()=> setopenlocktime(()=> true)} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                        <LockClockIcon color="success" />&nbsp;
                        <span style={{color: "green", fontSize: 18}}>Unlock temporary account</span>
                    </div>
                    :
                    <div onClick={()=> setopenlocktime(()=> true)} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                        <LockOpenIcon color="warning" />&nbsp;
                        <span style={{color: "#ed6c02", fontSize: 18}}>Lock temporary account</span>
                    </div>
                }
                {/*  */}


                <div style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                    <WarningIcon color="warning" />&nbsp;
                    <span style={{color: "#ed6c02", fontSize: 18}}>Retrict account</span>
                </div>
                {/*  */}


                <div onClick={()=> setopendialog(prev=> ({...prev, open: !opendialog.open, title: "Are you sure want to delete permanently this account ?"}))} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                    <DeleteIcon color="error" />&nbsp;
                    <span style={{color: "#d32f2f", fontSize: 18}}>Delete account</span>
                </div>


            </div>
            <Dialog
                open={opendialog?.open || false}
                TransitionComponent={Transition}
                keepMounted
                onClose={()=> setopendialog(prev=> ({...prev, title: "", open: false}))}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Confirm request"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {opendialog?.title}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=> setopendialog(prev=> ({...prev, title: "", open: false, titlesnackbar: ""}))}>No</Button>
                <Button onClick={()=> {
                    setopendialog(prev=> ({...prev, title: "", open: false, titlesnackbar: ""}))
                    if(opendialog.status== 1) {
                        lockaccount(props.id_user, setopensnackbar)
                        settitlesnackbar(()=> "Lock account was successfully")
                        return
                    }
                    if(opendialog.status== 2) {
                        unlockaccount(props.id_user, setopensnackbar)
                        settitlesnackbar(()=> "Unlock account was successfully")
                        return
                    }
                }}>Yes</Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={opensnackbar}
                autoHideDuration={6000}
                onClose={()=> setopensnackbar(()=> false)}
                message={titlesnackbar}
                action={action}
            />
            <>
                {
                    openlocktime=== true &&
                    <div style={{position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 99,width: "100%", height: "100%" }}>
                        <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", zIndex: 100, padding: 10, borderRadius: 10, }}> 
                            <div style={{fontSize: 18, fontWeight: 600}}>Choose time to lock</div>
                            <br />
                            <DateExecute valuetime={valuetime} setvaluetime={setvaluetime} />
                            <br />
                            <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse", alignItems: 'center', marginTop: 16, gap: 14}}>
                                <Button onClick={()=> {
                                    settitlesnackbar(()=> "Lock account temporary was successfully")
                                    setopenlocktime(()=> false)
                                    lockaccounttime(props.id_user, setopensnackbar, valuetime)
                                }} variant="contained">Select</Button>
                                <Button onClick={()=> setopenlocktime(()=> false)} variant="outlined">Cancel</Button>
                            </div>
                        </div>
                    </div>
                }
            </>
        </>
    )
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default InteractUser