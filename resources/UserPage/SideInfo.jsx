import React, { useContext, Fragment, useState } from 'react'
import { ContextForUser } from "./UserPage"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { getcardshoppinglogin } from '../action/get_cart_shopping_login'
import { CircularProgress } from '@mui/material'
import CartModalItem from '../components/modals/cart/CartModalItem'
import { getfavoritelogin } from '../action/get_favorite_login'
import "./SideInfo.sass"
import { useSelector } from 'react-redux'

const SideInfo = (props) => {
  const { email }= useContext(ContextForUser)
  const [open1, setOpen1]= useState(()=> false)
  const [open2, setOpen2]= useState(()=> false)
  return (
    <Fragment>
      <div className="pk1" style={{width: '100%', height: 'auto'}}>
          Email: {email}
      </div>
      <AddressUser />
      <OpenCart setOpen={setOpen1} open={open1} id_user={props?.in4[0]?.id_user} />
      <OpenFavorite setOpen={setOpen2} open={open2} id_user={props?.in4[0]?.id_user} />
    </Fragment>
  
  )
}

const AddressUser= (props)=> {
    const address = useSelector(state=> state.setnewaddress)
    return (
        <div className="pl1" style={{width: '100%', height: 'auto', padding: '10px 0'}}>
          Address: {address.address}
        </div>
    )
}

const OpenCart= (props)=> {
  const [data, setData]= useState(()=> [])
  const [loading, setLoading]= useState(()=> false)
  const [click, setclick]= useState(()=> false)
  return (
    <Fragment>
      <div className="pl1" style={{width: '100%', height: 'auto', padding: '10px 0', display: "flex", justifyContent: 'space-between', alignItems: "center", padding: '10px',margin: '10px 0', backgroundColor: "#f3f3f5", cursor: "pointer"}}
        onClick={()=> {
          props.setOpen(prev=> !prev);
          getcardshoppinglogin(setData, setLoading, props.id_user)
          setclick((prev)=> !prev)
        }}
      >
        <div>
          <ShoppingCartIcon />
        </div>
        <div style={{display: "flex", justifyContent: 'center',alignItems: 'center',}}>
          {
            props.open=== false ?
            <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
          }
        </div>
      </div>
      <div className="ow1" style={{width: '100%', height: "auto", lineHeight: 1.3 }}>
          {
            (loading=== true && data.length== 0) && <div style={{width: '100%', height: 150, display: 'flex', justifyContent: 'center',alignItems: 'center'}}><CircularProgress /> </div>
          }
          {
            (data.length> 0 && props.open === true ) && data.map((item, key)=> <div key={key}>
              <CartModalItem item={item } />
            </div>)
          }
          {
            (loading=== false && click== true && data?.length== 0) && <div style={{width: '100%', height: 150, display: 'flex', justifyContent: 'center',alignItems: 'center'}}>You don't have order product </div>
          }
      </div>
    </Fragment>
  )
}
const OpenFavorite= (props)=> {
  const [data, setData]= useState(()=> [])
  const [loading, setLoading]= useState(()=> false)
  const [click, setclick]= useState(()=> false)
  return (
    <Fragment>
      <div className="pl1" style={{width: '100%', height: 'auto', padding: '10px 0', display: "flex", justifyContent: 'space-between', alignItems: "center", padding: '10px',margin: '10px 0', backgroundColor: "#f3f3f5", cursor: "pointer"}}
      onClick={()=> {
        props.setOpen(prev=> !prev);
        getfavoritelogin(setData, setLoading, props.id_user)
        setclick(prev=> !prev)
      }} >
        <div>
          <FavoriteIcon />
        </div>
        <div style={{display: "flex", justifyContent: 'center',alignItems: 'center',}}>
          {
            props.open=== false ?
            <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
          }
        </div>
      </div>
      <div className="ow1" style={{width: '100%', height: "auto", lineHeight: 1.3 }}>
          {
            (loading=== true && data.length== 0) && <div style={{width: '100%', height: 150, display: 'flex', justifyContent: 'center',alignItems: 'center'}}><CircularProgress /> </div>
          }
          {
            (data.length> 0 && props.open === true ) && data.map((item, key)=> <div key={key}>
              <CartModalItem item={item } />
            </div>)
          }
          {
            (loading=== false && click== true && data?.length== 0) && <div style={{width: '100%', height: 150, display: 'flex', justifyContent: 'center',alignItems: 'center'}}>You don't have favorite product </div>
          }
      </div>
    </Fragment>
  )
}


export default SideInfo