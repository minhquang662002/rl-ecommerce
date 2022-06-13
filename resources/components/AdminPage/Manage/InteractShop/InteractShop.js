import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, Snackbar } from '@mui/material'
import moment from 'moment'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { p_notifications } from '../../../../firebase/online/push_notifacation'
import LockIcon from '@mui/icons-material/Lock';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteIcon from '@mui/icons-material/Delete';
import LockClockIcon from '@mui/icons-material/LockClock';
import CloseIcon from '@mui/icons-material/Close';
import { getstatusshop } from '../../../../action/admin/decision/getstatusshop'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { load_detail_shop } from '../../../../action/admin/shop/load_detail_shop'
import DateExecute from '../InteractUser/DateExecute'
import { edit_name_shop } from '../../../../action/admin/shop/edit_name_shop'
import { lockshopaccounttime } from '../../../../action/admin/decision/lockshopcounttime'
import { unlockshop } from '../../../../action/admin/decision/unlockshop'
import { lockshop } from '../../../../action/admin/decision/lockshop'

const InteractShop = (props) => {
  const [loading, setloading]= useState(()=> false)
  const [data, setdata]= useState(()=> [])
  const { id }= useParams()
  useEffect(()=> {
    load_detail_shop(setloading, setdata, id)
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
            loading=== false && data?.length>0 && <DetailShop {...data[0]} />
        }
    </div>
  )
}

const DetailShop= (props)=> {
    const ref= useRef(null)
    const [editnamestate, seteditnamestate]= useState(()=> false)
    const editname= async ()=> {
        seteditnamestate(()=> true)
        await ref.current.setAttribute("contenteditable", true)
        await ref.current.focus()   
    }
    const donename= async ()=> {
        await p_notifications(props.id_user, "Admin", "https://cdn4.iconfinder.com/data/icons/man-user-human-person-profile-avatar-business/100/16-1User_10-3-512.png", "just changed your name of shop to "+ref.current.innerText,"", "notifications/")
        seteditnamestate(()=> false)
        await ref.current.setAttribute("contenteditable", false)
        edit_name_shop(props.id_shop, ref.current.innerText)
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
    const [statusshop, setstatusshop]= useState(()=> [])
    useEffect(()=> {
      getstatusshop(props.id_shop, setstatusshop)
    }, [props.id_shop])
    const [openlocktime, setopenlocktime]= useState(()=> false)
    const [valuetime, setvaluetime]= useState(()=> new Date())
    return (
        <>
            <div>
                <img draggable={false} src={props.avatar_shop} alt="open" style={{width: 150, height: 150, borderRadius: "50%", objectFit: "cover"}} />
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
                <div>Quantity of shop : <strong style={{fontSize: 18}}>{props.quantity_shop || "_"}</strong></div>
                <br />
                <div>Joined : <strong style={{fontSize: 18}}>{moment(`${props.created_at}`, 'YYYY-MM-DD hh:mm:ss').fromNow() || "_"}</strong></div>
                <br />
                <div>Follower : <strong style={{fontSize: 18}}>{props.follower || "_"}</strong></div>
                <br />
                <div>Review : <strong style={{fontSize: 18}}>{props.review || "_"}</strong></div>
                <br />
            </div>
            <br />
            <div style={{width: "100%", maxWidth: 600, display: "flex", justifyContent: "space-between", alignItems: 'center', flexWrap: "wrap", gap: 10}}>
                {
                    statusshop?.lock_shop== 1 ?
                    
                    <div onClick={()=> {
                        setopendialog(prev=> ({...prev, open: true, title: "Are you sure want to unlock this shop ?", titlesnackbar: "Unlock shop was successfully", status: 2}))
                        }} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                        <LockOpenIcon color="success" />&nbsp;
                        <span style={{color: "green", fontSize: 18}}>Unlock shop</span>
                    </div> 
                    :
                    <>
                        <div onClick={()=> {
                            setopendialog(prev=> ({...prev, open: true, title: "Are you sure want to lock this shop ?", titlesnackbar: "Lock shop was successfully", status: 1}))
                            }} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                            <LockIcon color="warning" />&nbsp;
                            <span style={{color: "#ed6c02", fontSize: 18}}>Lock shop</span>
                        </div> 
                    </>
                }
                {/*  */}

                {
                    parseInt(statusshop?.lock_temporary) > 10000 ?
                    <div onClick={()=> setopenlocktime(()=> true)} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                        <LockClockIcon color="success" />&nbsp;
                        <span style={{color: "green", fontSize: 18}}>Unlock temporary shop</span>
                    </div>
                    :
                    <div onClick={()=> setopenlocktime(()=> true)} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                        <LockOpenIcon color="warning" />&nbsp;
                        <span style={{color: "#ed6c02", fontSize: 18}}>Lock temporary shop</span>
                    </div>
                }
                {/*  */}


                <div style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                    <WarningIcon color="warning" />&nbsp;
                    <span style={{color: "#ed6c02", fontSize: 18}}>Retrict shop</span>
                </div>
                {/*  */}


                <div onClick={()=> setopendialog(prev=> ({...prev, open: !opendialog.open, title: "Are you sure want to delete permanently this shop ?"}))} style={{display: "flex", justifyContent: "center", alignItems: 'center', cursor: "pointer"}}>
                    <DeleteIcon color="error" />&nbsp;
                    <span style={{color: "#d32f2f", fontSize: 18}}>Delete shop</span>
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
                        lockshop(props.id_shop, setopensnackbar)
                        settitlesnackbar(()=> "Lock shop was successfully")
                        return
                    }
                    if(opendialog.status== 2) {
                        unlockshop(props.id_shop, setopensnackbar)
                        settitlesnackbar(()=> "Unlock shop was successfully")
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
                                    settitlesnackbar(()=> "Lock shop temporary was successfully")
                                    setopenlocktime(()=> false)
                                    lockshopaccounttime(props.id_shop, setopensnackbar, valuetime)
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
export default InteractShop