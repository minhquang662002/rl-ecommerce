import React from 'react'
import { memo } from 'react'
import { SHOPINFO } from '../../../graphql/query/shopinfo'
import { useQuery } from "@apollo/client"
import { Button } from '@mui/material'
import OnlineComponet from './OnlineComponet'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'

const ShopOwn = (props) => {
  const { data, error }= useQuery(SHOPINFO, {
      variables: {
          id_shop: props.id_shop
      }
  })
  return (
    <>
        {
            error && <div>{error}</div>
        }
        <div className="cn4" style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',}}>
            <div className="sn1" style={{display: 'flex', boxSizing: 'border-box', height: 120, padding: 25, marginTop: 15, width: 1150, alignItems: "center", justifyContent: 'space-between', backgroundColor: "#f5f5f5", borderRadius: 8, boxShadow: "0 0 3px 0 #dee2e6"}}>
                <div className="na1" style={{display: "flex", flexDirection: "row", justifyContent: 'center',alignItems: 'center',gap: 14}}>
                    <AvatarShop data={data} />
                    <NameShop data={data} {...props} />
                </div>
                <AddInfo data={data} />
                <AddInfo2 data={data} />
            </div>
        </div>
    </>
  )
}
const AvatarShop= memo((props)=> {
    return (
        <div className="as1" style={{display: "flex", width: 78, height: 78, borderRadius: "50%", overflow: 'hidden', cursor: "pointer"}}>   
            <img src={props.data?.shopOfUser[0]?.avatar_shop} style={{width: "100%", height: "100%", objectFit: 'cover'}} />
        </div>
    )
})
const NameShop= memo((props)=> {
    const navigate= useNavigate()
    const goToMessage= async ()=> {
        const res= await axios({
            url: "http://localhost:8000/c/m/t",
            method: "get",
            timeout: 10000,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                i_s: props.id_user,
                i_r: props.author_shop
            }
        })
        const result= await res.data
        let a= []
        let h= 0
        Object.values(result.a2)?.map(item=> a.push(item.id_conversation))
        result.a1?.map(item=> {
            if(a.includes(item.id_conversation)=== true) {
                h= 1234
                navigate(`/message/t/${item.id_conversation}`, {replace: false, state: {a: 'nav'}})
                return
            }
            return 
        })
        if(h== 0) {
            return createMessage()
        }
    }
    const createMessage= async ()=> {
        const res= await axios({
            url: "http://localhost:8000/c/m/n",
            method: 'get',
            timeout: 10000,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
            },
            xsrfCookieName: 'qwerty',
            xsrfHeaderName: 'token',
            withCredentials: false,
            responseType: "json",
            params: {
                i_s: props.id_user,
                i_r: props.author_shop,
                id_conversation: v4(),
                timeup: parseInt(new Date().getTime()) + 7* 72000,
                timedl: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1)
            }
        })
        const result= await res.data
        navigate(`/message/t/${result}`, {replace: false, state: { a: "nav"}})
    }
    return (
        <>
            <div className="ns2" style={{height: '100%'}}>
                <div className='osa1'>
                    {
                        props.data?.shopOfUser[0]?.name_shop
                    }&nbsp;
                    {
                        props.a_s == props.id_user && "(You)"
                    }
                </div>
                <div className='av1' style={{display: "flex", alignItems: "center" , flexDirection: "row", gap: 4}}>
                    <div>Online</div> 
                    {
                        <OnlineComponet {...props}  />
                    }
                </div>
                <br />  
                {
                    props.a_s != props.id_user &&
                    <div className='itr1' style={{display: "flex", gap: 10}}>
                        {
                            props?.id_user!= props?.author_shop &&
                            <Button variant="contained" onClick={()=> goToMessage()}>Message</Button>
                        }
                        <Button variant="outlined" onClick={()=> navigate(`/shop?id=${props.id_shop}`)}>Visit {props?.id_user == props?.author_shop && "your"} shop</Button>
                    </div>
                }
            </div>  
        </>
    )
})

const AddInfo= memo((props)=> {
    return (
        <div className="ai1" style={{display: 'flex', height: "100%", justifyContent: "space-between", flexDirection: "column"}}>
            <div>
                Joined:	&nbsp;
                <span style={{color: "#2e89ff"}}>

                {
                    Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) >= 365 && (Math.floor(Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) / 365) + " year")                    
                }
                {
                     Math.floor(Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) / 365) > 1 && "s" 
                }
                {/*  */}
                {
                    (Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) < 365 && Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) >= 30) && Math.floor(Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) / 30) + "month"

                }
                {
                    (Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) < 365 && Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) >= 30)&& Math.floor(Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) / 30) > 1 && "s"
                }
                {/*  */}
                {
                    Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) < 30 && Math.floor(Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24))) + "day" 

                }
                {
                    Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)) < 30&& Math.floor(Math.ceil((new Date().getTime()- new Date(props.data?.shopOfUser[0]?.joined).getTime()) / (1000 * 3600 * 24)))> 1 && "s"
                }
                {/*  */}
                	&nbsp;ago
                </span>
            </div>
            <div>
                Follower: <span style={{color: "#2e89ff"}}>{props.data?.shopOfUser[0]?.follower}</span>
            </div>
        </div>
    )
})
const AddInfo2= memo((props)=> {
    return (
        <div className="ai1" style={{display: 'flex', height: "100%", justifyContent: "space-between", flexDirection: "column"}}>
            <div>
                Products: <span style={{color: "#2e89ff"}}>{props.data?.shopOfUser[0]?.quantity_shop}</span>
            </div>
            <div>
                Review: <span style={{color: "#2e89ff"}}>{props.data?.shopOfUser[0]?.review}</span>
            </div>
        </div>
    )
})

export default ShopOwn  