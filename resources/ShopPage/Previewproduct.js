import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Button } from '@mui/material'
import axios from 'axios'
import { LoadingSuspense3 } from '../components/loading/LoadingSuspense'

const Previewproduct = (props) => {
  const [loading, setloading]= useState(()=> false)
  useEffect(()=> {
    document.body.style.overflow= "hidden"
    return ()=> document.body.style.overflow= "auto"
  }, [])
  const pd= async ()=> {
    setloading(()=> true)
    const r1= await props.uploadImageIndex()
    const r2= await props.uploadfullimage()
    // const res2= axios({
    //   url: "http://localhost:8000/p/m/n/b",
    //     method: "post",
    //     headers: {
    //         "Content-Type": "multipart/form-data",
    //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
    //     },
    //     timeout: 10000,
    //     xsrfCookieName: 'qwerty',
    //     xsrfHeaderName: 'token',
    //     withCredentials: false,
    //     responseType: "json",
    //     data: props.formdata
    // })
    const res= await axios({
      url: "http://localhost:8000/api/v2/upload/product",
      method: "post",
      timeout: 10000,
      headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
      },
      xsrfCookieName: 'qwerty',
      xsrfHeaderName: 'token',
      withCredentials: false,
      responseType: "json",
      data: {
        ...props, size: [...props.size]?.toString(),
        imageIndex: r1[0],
        imageHover: r1[1],
        full_images:","+r2.toString(),
        id_shop: props.id_shop,
        id_user: props.id_user
      }
    })
    const result= await res.data 
    setloading(()=> true) 
    props.setpd(()=> false)
    console.log(result)
  }
  return (
    <div style={{display: "flex", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 99999999, background: "#fff", justifyContent: "center", alignItems: 'center', gap: 100, flexDirection: "column"}}>
      <div style={{display: "flex", justifyContent: 'center',alignItems: 'center',}}> 
        <div style={{width: 400, height: 300}}>
            <CarouselProvider
              className="ekoewe"
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={props.lim?.length}
            > 
              <ButtonBack style={{display: "flex", justifyContent: 'center',alignItems: 'center', width: 36, height: 36, margin: 10, padding: 10, borderRadius: "50%"}}><ArrowBackIosIcon /></ButtonBack>
              <Slider className="dskewteowr" style={{width: 400}}>
              {
                props.lim.length>0 && props.lim.map((item, key)=> <Slide key={key} index={key} >
                    <img src={item.i} alt="can't open" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </Slide>)
              }
              </Slider>   
              <ButtonNext style={{display: "flex", justifyContent: 'center',alignItems: 'center', width: 36, height: 36, margin: 10, padding: 10, borderRadius: "50%" }}><ArrowForwardIosIcon /></ButtonNext>
            </CarouselProvider>
        </div>
        <div>
          <div>
            Title: <span style={{fontSize: 18, fontWeight: 600, textTransform: "capitalize"}}>{props.title}</span>
          </div>
          <br />
          <div>
            Price: <span style={{fontSize: 18, fontWeight: 600, textTransform: "capitalize"}}>{props.price}</span>
          </div>
          <br />
          <div>
            Color: <span style={{fontSize: 18, fontWeight: 600, textTransform: "capitalize"}}>{props.color}</span>
          </div>
          <br />
          <div>
            Description: <span style={{fontSize: 18, fontWeight: 600, textTransform: "capitalize"}}>{props.decription}</span>
          </div>
          <br />
          <div>
            Size: <span style={{fontSize: 18, fontWeight: 600, textTransform: "capitalize"}}>{[...props.size].map((item, key)=> <span key={key} style={{textTransform: "uppercase"}}>&nbsp;&nbsp;{item}&nbsp;&nbsp;</span>)}</span>
          </div>
          <br />
          <div>
            Type: <span style={{fontSize: 18, fontWeight: 600, textTransform: "capitalize"}}>{props.type}</span>
          </div>
          <br />
        </div>
      </div>
      <div style={{display: "flex", gap: 10, justifyContent: 'center',alignItems: 'center',}}>
        <Button variant="outlined" onClick={()=> pd()}>
          Post
        </Button>
        <Button variant="contained" onClick={()=> props.setpd(()=> false)}>
          Cancel
        </Button>
      </div>
      {
        loading=== true && <LoadingSuspense3 />
      }
    </div>
  )
}

export default Previewproduct