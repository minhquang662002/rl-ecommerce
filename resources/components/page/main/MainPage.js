import "./MainPage.css"
import Carousel from "../../carousel/Carousel"
import MainCategories from "./MainCategories"
import MainPageSection from "./MainPageSection"
import BannerSection from "./banners/BannerSection"
import axios from "axios"
import { useState, useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import PageFooter from "../../../footer/PageFooter"

const MainPage = () => {
    const [data, setData]= useState(()=> [])
    const [data2, setData2]= useState(()=> [])
    useEffect(()=> {
        (async ()=> {
            const res1= axios.get("http://localhost:8000/products/")
            const res2= axios.get("http://localhost:8000/products/bestsellers/")
            const result= await Promise.all([res1, res2])
            setData(result[0].data)
            setData2(result[1].data)
        })()
    }, [])
    return (
        <div className="MainPage">
            <Helmet>
                <title>Home - Unilight</title>
            </Helmet>
            <Carousel />
            <div className="MainPage__body">
                <MainCategories />
                <MainPageSection section={"trending"} data={data} />
                <BannerSection />
                <MainPageSection section={"best seller"} data={data2} />
            </div>
            <PageFooter />
        </div>
    )
}

export default MainPage
