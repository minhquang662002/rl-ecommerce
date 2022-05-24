import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useLazyQuery } from '@apollo/client';
import { PGR } from '../../../graphql/query/review';
import { ContainerComment } from "./ListComment" 
import CircularProgress from '@mui/material/CircularProgress';
import { memo } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Close from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';

const Review = (props) => {
  const [t, setT]= useState(()=> 0)
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8000/t/c/r",
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
            id_product: props.id_product
          }
      })
      const result= await res.data
      setT(result)
    })()
  }, [props.id_product])
  return (
    <div className="dsds" style={{width: '100%', padding: 10}}>

      <PaginateReview t={t[0]} r={parseFloat(t[1])} id_product={props.id_product} />
    </div>
  )
}

function PaginateReview(props) {
  const [page, setPage] = useState(1);
  const handleChange = async (event, value) => {
    setL(()=> true)
    await  pg({variables: {
      id_product: props.id_product, page: parseInt(value)
    }})
     setPage(value)
     setL(()=> false)
  };
  const [pg, {data, loading, error}]= useLazyQuery(PGR, {
    pollInterval: 600000,
  })
  const [l, setL]= useState(()=> false)
  useEffect(()=> {
    (async()=> {
      setL(()=> true)
      await pg({variables: {
        id_product: props.id_product, page: 1
      }
    })
    setL(()=> false)
  })()
  }, [props.id_product])
  const [o, setO]= useState(()=> false)
  return (
    <>
      <div style={{fontSize: 24, fontWeight: 600, color: "#242526", marginBottom: 32}}>Review</div>
      {
        data?.reviewproduct?.length==0 ?
        <div>No review this product</div>
        :
        <>
          <Stack spacing={1} sx={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Rating name="half-rating" value={parseFloat(parseFloat(props.r / props.t* 5).toFixed(1)) || 1} precision={0.1} readOnly size="large" />
            <div style={{fontSize: 24}}>{parseFloat(props.r / props.t* 5).toFixed(parseFloat(props.r / props.t* 5) - Math.floor(parseFloat(props.r / props.t* 5))==0 ? 0 :1)}/5</div>
          </Stack>
          <br />
          <br />
          <Stack spacing={2} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            {
              (data!== undefined && loading=== false) && data?.reviewproduct?.map((item, key)=> <Fragment key={key}><ContainerComment {...item} x={"cc"} /><Rs {...item} /><CoIm {...item} setO={setO} o={o} /></Fragment>)
            }
            {
              l && <Stack sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: 100}}><CircularProgress /></Stack>
            }
            {
              error && <div>Error</div>
            }
          </Stack>
          <Stack spacing={2} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
            <br />
            <br />
            {
              Math.ceil(parseInt(props?.t) / 1) >=1 &&
            <Pagination color="primary" count={Math.ceil(parseInt(props?.t) / 1) || 1} page={page} onChange={handleChange} />
            }
          </Stack>
        </>
      }
    </>
  );
}
const CoIm= (props)=> {
  return (
    <Stack sx={{display: "flex", flexWrap: "wrap", width: "100%", flexDirection: "row", padding: "0 10px"}}>
      {
        (props?.image && props?.image?.split(",")?.length <= 7) && props?.image?.split(",")?.map((item, key)=> <S setO={props.setO} key={key} i={item} />) 
      }
      {
        (props?.image && props?.image?.split(",")?.length > 7) &&
          <>
          {
            (props?.image?.split(",")?.slice(0, 6).map((item, key)=> <S setO={props.setO} key={key} i={item} li={props?.image} />)) 
          }
          {
            (props?.image?.split(",")?.slice(6, 7).map((item, key)=> <S2 setO={props.setO} rest={parseInt(props?.image?.split(",")?.length - 7)} key={key} i={item} li={props?.image} />)) 
          }
          
          </>
      }
      {
        props.o=== true &&
        <Cas l={props?.image} setO={props.setO} />
      }
    </Stack>  
  )
}
const S= memo((props)=> {
  return (
    <div className="dskds" style={{width: "25%", height: 100, borderRadius: 5, overflow: 'hidden', position: "relative", padding: 1}}> 
      <img referrerPolicy="no-referer" src={props.i || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Feather-core-alert-circle.svg/1024px-Feather-core-alert-circle.svg.png"} alt="Can't display" style={{width: "100%", height: "100%", objectFit: 'cover', cursor: "pointer", borderRadius: 5}} />
      <div onClick={()=> props.setO(()=> true)} className="over-lay"></div>
    </div>
  )
})
const S2= memo((props)=> {
  return (
    <div className="dskds" style={{width: "25%", height: 100, borderRadius: 5, overflow: 'hidden', position: "relative", padding: 1}}> 
      <img referrerPolicy="no-referer" src={props.i || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Feather-core-alert-circle.svg/1024px-Feather-core-alert-circle.svg.png"} alt="Can't display" style={{width: "100%", height: "100%", objectFit: 'cover', cursor: "pointer", borderRadius: 5}} />
      <div className="dskew" style={{position: 'absolute', width: '100%', height: '100%', transform: "translate(0, 0)", display: 'flex', justifyContent: 'center',alignItems: 'center', color: "#e4e6eb", fontSize: 20, top: 0, left: 0, fontWeight: 600}}>
        <span>+{props.rest}</span>
      </div>
      <div onClick={()=> props.setO(()=> true)} className="over-lay" style={{opacity: 1}}></div>
    </div>
  )
})

const Cas=(props)=> {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1200, itemsToShow: 4 }
  // ];
  const [items, setItems] = useState(props?.l?.split(","));
  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };  
  useEffect(()=> {
    document.body.style.overflow="hidden"
    return ()=> document.body.style.overflow= "auto"
  }, [])
  return (
    <div className="dso" style={{width: '100%', height: "100%", position: 'fixed', top: 0, left: 0, backgroundColor: "#fff", zIndex: 9999999}}>
      <div className="carousel-wrapper" style={{position:"relative"}}>
        <Carousel>
          {items.map((item, key) => (
            <Item image={item} src={item} key={key}></Item>
          ))}
        </Carousel>
        <div className="dsdskew" onClick={()=> props.setO(()=> false)} style={{width: 40, height: 40, borderRadius: "50%", display: 'flex', justifyContent: 'center',alignItems: 'center', position: 'absolute', top: 25, right: 85, backgroundColor: "#e4e6eb",cursor: 'pointer', padding: 10}}>
          <Close width={24} height={24} />
        </div>
      </div>
    </div>
  )
}
const Item= styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 630px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  font-size: 4em;
  object-fit: contain;
  background-image: url(${props=> props.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Feather-core-alert-circle.svg/1024px-Feather-core-alert-circle.svg.png"});
  background-repeat: no-repeat;
  background-size: 3000px 2000px;
  margin: 15px;
  border: none;
  background-position: center;
`
const Rs= (props)=> {
  return (
    <Stack sx={{width: "100%", padding: "0 10px"}}>
      <Rating size="medium" value={parseInt(props.star)} readOnly />
    </Stack>
  )
}


export default Review