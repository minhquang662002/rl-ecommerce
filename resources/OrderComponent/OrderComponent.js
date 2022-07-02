import React, { Fragment, useMemo } from 'react'
import NotFound404 from '../NotFound/NotFound404'
import { Helmet } from 'react-helmet-async'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { GETDATA } from './getdata'
import { useQuery } from '@apollo/client/react'
import useQueryParams from '../ListItem/HookQuerySearch'
import { Button, CircularProgress } from '@mui/material'
import { goToMessage } from '../action/goToMessage'
import moment from 'moment'
import { execute_order } from '../action/execute_order'
import axios from 'axios'

const OrderComponent = (props) => {
  const list = useMemo(()=> ([
      {type: 1, title: "Confirm"},
      {type: 2, title: "Pickup"},
      {type: 3, title: "Delivery"},
      {type: 4, title: "Delivered"},
  ]))

  if(props.email && props.id_user) {
      return (
          <>
            <Helmet>
                <title>Order - Unilight</title>
            </Helmet>
            <div style={{width: "100%", height: "auto"}}>
                <div style={{width: "100%", height: 58, position: "sticky", left: 0, top: 0, background: "#f2f0f5", display: 'flex', flexDirection: "row", alignItems: 'center',zIndex: 11, border: "1px solid rgb(213, 213, 213)"}}>
                    {
                        list?.map((item, key)=> <Link key={key} to={`/order?type=${item.type}`} style={{flex: "1 1 0", textAlign: "center"}}>{item.title}</Link>)
                    }
                </div>
                <Routes>
                    <Route path='/' element={<Component {...props} />}></Route>
                    <Route path='/?type=1' element={<Component {...props} />}></Route>
                    <Route path="*" element={<NotFound404 />} />
                </Routes>
            </div>
          </>
      )
   }
   else {
       return (
           <NotFound404 />
       )
   }
}
const Component= (props)=> {
    const query= useQueryParams()
    const {data, error, loading}= useQuery(GETDATA, {
        variables: {
            id_user: props.id_user,
            type: parseInt(query.get("type")) || 1
        }
    })
    if(loading=== true) return <div style={{width: "100%", padding: 40, display: "flex", justifyContent: 'center',alignItems: "center"}}>   <CircularProgress /></div>
    else if(error=== true) return <div>err</div>
    else {
        return (
            <div style={{width: "100%", position: "relative", padding: 20}}>

                {
                    data  && data?.purchase?.map((item, key)=> <Fragment key={key}>
                        <Product {...item} {...props} />
                        <div style={{marginBottom: 20, width: "100%"}}></div>
                    </Fragment>)
                }
                {
                    data?.purchase.length <=0 && <div>Nothing to render</div>
                }
            </div>
        )
    }
}
export const Product= (props)=> {
    const navigate= useNavigate()
    return (
        <div onClick={()=> navigate(`/collections/products/${props.title.trim().toLowerCase().replaceAll(" ", "-")}`, {state: {id_product: props.id_product}})}  className='ddasww' style={{width: "100%", height: "auto", boxSizing: "border-box", padding: 20, border: "1px solid #d5d5d5", borderRadius: 10, background: "#f2f0f5", cursor: "pointer" }}>
            <C1 {...props} />
            <C2 {...props} />
            <C3 {...props} />
            {
                props.oooo=== true &&
                <C4 {...props} />
            }
        </div>
    )
}
const C1= (props)=> {
    const navigate= useNavigate()
    return (
        <div style={{width: "100%", display: "flex", alignItems: 'center',justifyContent: "space-between", padding: 10, margin:"16px 0"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: 'space-between', gap: 10}}>
                <div style={{fontWeight: 600, textTransform: "capitalize"}}>{props.name_shop}</div>
                <div style={{padding: "6px 12px", background: "#2e89ff", color: "#fff", fontWeight: 600, borderRadius: 6, cursor: "pointer", position: "relative", zIndex: 11}} onClick={(e)=> {
                    e.stopPropagation()
                    goToMessage(props.id_user, props.id_seller, navigate)
                }}>Chat</div>
                <div onClick={(e)=> {
                    e.stopPropagation()
                    navigate(`/shop?id=${props.id_shop}`)
                }} style={{padding: "6px 12px", border: "1px solid #2e89ff", fontWeight: 600, borderRadius: 6, color: "#2e89ff", cursor: "pointer"}}>Visit shop</div>
            </div>
            <div style={{color: "orange"}}>
                {
                    props.state== 1 && "Wait for confirm"
                }
                {
                    props.state==2 && "Confirm success"
                }
                {
                    props.state==3 && "Delivery"
                }
                {
                    props.state==4 && "Delivered"
                }
            </div>
        </div>
    )
}
const C2= (props)=> {
    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: 'space-between', borderTop: "1px solid #d5d5d5", borderBottom: "1px solid #d5d5d5", padding: 30, margin:"16px 0"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 12}}>
                <div style={{width: 80, height: 80, borderRadius: 8, overflow: 'hidden',}}>
                    <img src={props.imageindex} alt="open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 4}}>
                    <div style={{fontSize: 18, fontWeight: 600}}>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</div>
                    <div style={{fontSize: 14, color: "#706b6b"}}>Type: {props.color.charAt(0).toUpperCase() + props.title.slice(1)}, {props.size.toUpperCase()}</div>
                    <div>x{props.quantity}</div>
                </div>
            </div>
            <div style={{color: "#2e89ff"}}>
                $ {props.cost}
            </div>
        </div>
    )
}
const C3= (props)=> {
    const cancelOrder= async ()=> {
        const res= await axios({
            url: "http://localhost:8000/cancel_order",
            method: "get",
            timeout: 10000,
            timeoutErrorMessage: "Time out login",
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
            xsrfHeaderName: 'X-CSRF-TOKEN',
            withCredentials: false,
            params: {
                id_product: props?.id_product,
                
            }

        })
    }
    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: 'space-between',padding: "10px", marginTop: 20}}>
            <div>

            </div>
            <div style={{display: 'flex', flexDirection: "column", alignItems: "flex-end", gap: 16}}>
                <div>Sum of cost: $ <span style={{color: "#2e89ff", fontSize: 20}}>{parseInt(props.cost) + 2}</span></div>
                {
                    props.state== 1 &&
                    <div style={{padding: "6px 12px", border: "1px solid #d5d5d5", borderRadius: 6, color: "#706b6b", background: "#fff", userSelect: "none"}}>Wait for show owner confirm your order.</div>
                }
                {
                    <div style={{padding: 20}} onClick={(e)=> e.stopPropagation()}>Cancel order </div>
                }
            </div>
        </div>
    )
}
const C4= (props)=> {
    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: 'space-between',padding: "10px", marginTop: 20}}>
            <div>
            </div>
            <div style={{display: 'flex', flexDirection: "column", alignItems: "flex-end", gap: 16}}>
                <div>Order at: <span style={{color: "#2e89ff", fontSize: 20}}>{moment(parseInt(props.timeu)).format("HH:mm DD/MM/YYYY")}</span></div>
                <div>Order by: <span style={{color: "#2e89ff", fontSize: 20}}>{props.firstname} {props.lastname}</span></div>
                <br />
                {
                    props.state== 1 &&
                    <div style={{display: "flex", justifyContent: 'center',alignItems: 'center', gap: 10}}>
                        <Button onClick={async (e)=> {
                            e.stopPropagation()
                            await execute_order(props.id_order, 0)
                            props.setchange(prev=> !prev)

                        }} variant={"contained"} color="error">Deny</Button>
                        <Button onClick={async (e)=> {
                            e.stopPropagation()
                            await execute_order(props.id_order, 2)
                            props.setchange(prev=> !prev)
                        }} variant={"contained"}>Accept</Button>
                    </div>

                }
                {
                    props.state== -1 &&
                    <div style={{color: "red"}}>
                        Denied request order
                    </div>
                }
                {
                    props.state== 0 &&
                    <div style={{color: "blue"}}>
                        Accepted request order
                    </div>
                }
            </div>
        </div>
    )
}

export default OrderComponent
