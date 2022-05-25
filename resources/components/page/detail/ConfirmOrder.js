import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { payment } from '../../../action/payment'
import CircularProgress from '@mui/material/CircularProgress'
import { useDispatch } from "react-redux"

function SimpleDialog(props) {
  const handleClose = () => {
    props.onClose(()=> false)
  }
  const [loading, setLoading]= React.useState(()=> false)
  const dispatch= useDispatch()

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Detail order</DialogTitle>
      <div className="dg4" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, gap: 10, flex: "1 1 0"}}>
        <div className="of5" style={{minWidth: 150, height: 250, borderRadius: 10, overflow: "hidden", }}>
            <img src={props.image} alt="open" className="fmk2" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
        <div className="ejw4" style={{height: "100%"}}>
            <div style={{fontWeight: 600}}>{props.title}</div>
            <br />
            <div style={{ textOverflow: "ellipsis", height: 100}}>{props.decription}</div>
        </div>
        <div className="iy4" style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <div style={{textTransform: "capitalize", fontSize: 16, fontWeight: 600, whiteSpace: "nowrap"}}>product classification</div>
            <br />
            <div>
              {props.size_ && (`Size: ${props.size_}`)} 
            </div>
            <br />
            <div>
              {props.color_ && (`Color: ${props.color_}`)} 
            </div>
            <br />
            <div>
              <strong>{props.quantity && (`Quantity: ${props.quantity}`)} </strong>
            </div>
        </div>
      </div>
      <div className="ji3" style={{display: "flex", width: "100%", flexDirection: "row-reverse", alignItems: "center", gap: 10, padding: 10}}>
        <Button disabled={loading=== true ? true : false} onClick={()=> payment(props.author_shop, props.quantity,parseInt(props.price), props.image, props.title, setLoading, dispatch, props.buyer, props.id_product, props.color_)} variant="contained">{loading=== true ? <CircularProgress style={{width: 24, height: 24}} /> : "Checkout"}</Button>
        <Button onClick={()=> handleClose()} variant="outlined">Cancel</Button>
      </div>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Buy now
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        {...props}
      />
    </div>
  )
}