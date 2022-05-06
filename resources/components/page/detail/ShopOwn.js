import React from 'react'
import { memo } from 'react'
import { SHOPINFO } from '../../../graphql/query/shopinfo'
import { useQuery } from "@apollo/client"
import { Button } from '@mui/material'
import OnlineComponet from './OnlineComponet'

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
    return (
        <div className="ns2" style={{height: '100%'}}>
            <div className='osa1'>
                {
                    props.data?.shopOfUser[0]?.name_shop
                }
            </div>
            <div className='av1' style={{display: "flex", alignItems: "center" , flexDirection: "row", gap: 4}}>
                <div>Online</div> 
                {
                    <OnlineComponet {...props} />
                }
            </div>
            <br />  
            <div className='itr1' style={{display: "flex", gap: 10}}>
                <Button variant="contained">Message</Button>
                <Button variant="outlined">Visit shop</Button>
            </div>
        </div>
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