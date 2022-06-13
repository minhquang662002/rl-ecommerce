import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useRef, useState } from "react";
// import { ImageRounded } from "@mui/icons-material";

const DetaiPageLeft = ({
    imageList,
    transAmount,
    setTransAmount,
    displayedImage,
    setDisplayedImage,
}) => {
    const [c, setC]= useState(()=> ({
        cx: 0,
        cy: 0,
        px: 0,
        py: 0
    }))
    // const [showRoom, setShowRoom]= useState(()=> false)
    const lensRef= useRef()
    const zoomRef= useRef()
    const imgRef= useRef()
    const galleryRef = useRef();
    let itemHeight = galleryRef?.current?.clientHeight / imageList.length;
    let totalItems = galleryRef?.current?.clientHeight / itemHeight;
    // function imageZoom() {
    //     var img, lens, result, cx, cy
    //     img= document.getElementById
    // }
    const imageZoom= ()=>{ 
        setC(prev=> ({
            ...prev, cx: zoomRef.current?.offsetWidth / lensRef.current?.offsetWidth, cy: zoomRef.current?.offsetHeight / lensRef.current?.offsetHeight
        }))
        zoomRef.current.style.backgroundSize= `${imgRef.current.width * zoomRef.current?.offsetWidth / lensRef.current?.offsetWidth}px ${imgRef.current.height *  zoomRef.current?.offsetHeight / lensRef.current.offsetHeight}px`
    }
    useEffect(()=> {
        lensRef.current.style.visibility= "hidden"
        zoomRef.current.style.visibility= "hidden"
        document.addEventListener("mouseover", imageZoom)
        return ()=> document.removeEventListener("mouseover", imageZoom)
    },[])
    const moveLens= (e)=> {
        getCursorPos(e)
        let x, y
        x= c.px - lensRef.current.offsetWidth / 2
        y= c.py - lensRef.current.offsetHeight / 2
        if(x >=  imgRef.current.width - lensRef.current.offsetWidth) {
            x= imgRef.current.width - lensRef.current.offsetWidth
            lensRef.current.style.visibility= "hidden"
            zoomRef.current.style.visibility= "hidden"
        }
        else if(x <= 0) {
            x= 0
            lensRef.current.style.visibility= "hidden"
            zoomRef.current.style.visibility= "hidden"
        }
        else if(y >= imgRef.current.height - lensRef.current.offsetHeight) {
            y= imgRef.current.height - lensRef.current.offsetHeight
            lensRef.current.style.visibility= "hidden"
            zoomRef.current.style.visibility= "hidden"
        }
        else if(y <=0) {
            y= 0
            lensRef.current.style.visibility= "hidden"
            zoomRef.current.style.visibility= "hidden"
        }
        else {
            lensRef.current.style.visibility= "visible"
            zoomRef.current.style.visibility= "visible"
        }
        // if(c.px > imgRef.current.width - lensRef.offsetWidth) {

        // }
        // if(c.px <0) {
        //     setC(prev=> ({...prev, cx: 0}))
        // }
        // if(c.py > imgRef.current.height - lensRef.current.offsetHeight) {
        //     setC(prev=> ({...prev, py: imgRef.current.height - lensRef.current.offsetHeight}))
        // }
        // if(c.py <0) {
        //     setC(prev=> ({...prev, py: 0}))
        // }
        
        
        lensRef.current.style.left= `${x}px`
        lensRef.current.style.top= `${y}px`
        zoomRef.current.style.backgroundPosition= `-${x * c.cx}px -${y* c.cy}px`

    }
    const getCursorPos= (e)=> {
        const a= imgRef.current.getBoundingClientRect()
        setC(prev=> ({...prev,px: e.pageX - a.left, py: e.pageY - a.top}))
    }   
    return (
        <React.Fragment>
            <div className="DetailPage__product--showcase">
                <div className="DetailPage__imageGallery" ref={galleryRef}>
                    <div
                        className="DetailPage__inner"
                        style={{
                            transform: `translateY(${transAmount}px)`,
                        }}
                    >
                        {imageList?.map((item, index) => {
                            return (
                                <div
                                    className="imageGallery__items"
                                    key={index}
                                    onClick={() => setDisplayedImage(index)}
                                >
                                    <img
                                        className="imageGallery__images"
                                        src={item}
                                        style={{
                                            opacity:
                                                index === displayedImage ? 1 : 0.4,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="imageGallery__button--container">
                        <button
                            className="imageGallery__button"
                            onClick={() => {
                                if (
                                    transAmount <
                                    galleryRef?.current?.clientHeight -
                                        totalItems * itemHeight
                                ) {
                                    setTransAmount((state) => state + itemHeight);
                                }
                            }}
                        >
                            <KeyboardArrowUpIcon />
                        </button>
                        <button
                            className="imageGallery__button"
                            onClick={() => {
                                if (
                                    transAmount >
                                    -galleryRef?.current?.clientHeight +
                                        (totalItems - 1) * itemHeight
                                ) {
                                    setTransAmount((state) => state - itemHeight);
                                }
                            }}
                        >
                            <KeyboardArrowDownIcon />
                        </button>
                    </div>
                </div>
                <div>
                    <div className="fjesfidjsdkf" style={{position: 'relative', height: "100%"}}>
                        
                        <div onMouseMove={(e)=> moveLens(e)} ref={lensRef} className="img-zoom-lens" style={{position: 'absolute', border: '1px solid #fff', width: 150, height: 150}}>
                        </div>

                        <img
                            ref={imgRef}
                            className="DetailPage__image--displayed image"
                            src={imageList[displayedImage]}
                            onMouseMove={(e)=> moveLens(e)}
                            style={{height: "100%", minWidth: 300}}
                        />
                    </div>
                    
                    <div ref={zoomRef} id="my_result" className="img-zoom-result" style={{backgroundImage: `url(${imageList[displayedImage]})`, width: 600, height: 600, position: 'absolute', left: '45%', top: '-100px', backgroundRepeat: "no-repeat", zIndex: 99}}></div>
                </div> 
            </div>
            
            {/* <div className="zoomImage" style={{position: "absolute", right: 0, width: 480, height: 480, marginLeft: 20}}><img src="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/eberj4183019d5e_q1_2-0_540x.jpg?v=1606136069" alt="open" style={{width: '100%', height: '100%', transform: 'translate(50%, 50%)', overflow: 'hidden'}} /></div> */}
        </React.Fragment>
    );
};

export default DetaiPageLeft;
