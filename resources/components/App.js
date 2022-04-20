import React, {lazy, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import CartModal from "./modals/cart/CartModal"
import SearchModal from "./modals/search/SearchModal"
import Layout from "./modals/Layout"
import AuthModal from "./modals/auth/AuthModal"
import MainPage from "./page/main/MainPage"
import FavoritePage from "./page/favorite/FavoritePage"
import QuickShopModal from "./modals/quickshop/QuickShopModal"
import DetailPage, { fakeSleep } from "./page/detail/DetailPage"
import AcountPage from "./page/account/AcountPage"
import CollectionPage from "./page/collections/CollectionPage"
import { Suspense, useContext } from "react"
import { NavContext } from "./context/NavContext"
import useScrollToTop from "../utils/useScrollToTop"
import VerifyAccountViaEmail from "./Verify/VerifyAccountViaEmail"
import Loading from "./loading/Loading"
import "./ButtonRipple/Button.sass"
import CircularProgress from '@mui/material/CircularProgress'
import NotFound404 from "../NotFound/NotFound404"
import Favourite from "./Favorite/Favoutie"
import axios from "axios"
import { useState } from "react"
import nProgress from "nprogress"
import "./App.css"
import UserPage from "../UserPage/UserPage"
import { result } from "lodash"
import SeeDetailAvatar from "../UserPage/SeeDetailAvatar"
import ListItem from "../ListItem/ListItem"

const QuickViewModal = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./modals/quickview/QuickViewModal")), 1250)
    })
  })
// import { ButtonRipple } from "./ButtonRipple/Button"

function App() {
    const {
        navChoices: { quickViewData, quickShopData },
    } = useContext(NavContext)
    const [userLogin, setUserLogin]= useState(()=> false)
    const [in4User, setIn4User]= useState(()=> [])
    useScrollToTop()
    useEffect(()=> {
        (async()=> {
            nProgress.configure({ easing: "ease", speed: 500, trickleSpeed: 600, showSpinner: false, parent: "#root" })
            axios.interceptors.request.use(config=> {
                nProgress.start()
                return config
            }, error=> {
                return Promise.reject(error)
            })
            axios.interceptors.response.use(response=> {
                nProgress.done()
                console.log(response)
                return response
            }, err=> {
                return Promise.reject(err)
            })
            axios.interceptors.response.eject(response=> {
                nProgress.done()
                console.log(response)
                return response
            }, err=> {
                return Promise.reject(err)
            })
            
            try {
                const res= await axios({
                url: "http://localhost:8000/l/",
                method: "post",
                timeout: 10000,
                timeoutErrorMessage: "Time out login",
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
                xsrfHeaderName: 'X-CSRF-TOKEN',
                withCredentials: false,
                validateStatus: (status)=> {
                    return status >= 200 && status < 300
                },
                maxRedirects: 100,
                maxContentLength: 100000,
            })
                const result= await res.data
                setUserLogin(result.login)
                if(result.login=== "true") {
                    setIn4User(()=> result[0])
                }
            } catch (error) {
                console.log(error)
                setUserLogin("false")
                nProgress.done()
            }
        })()
            
    }, [])
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route
                    path="/collections/:section/products/:product"
                    element={<DetailPage />}
                />
                <Route path="/collections/products/:product" element={<DetailPage />}></Route>
                <Route
                    path="/collections/:section"
                    element={<CollectionPage />}
                />
                <Route path="/account" element={<AcountPage />} />
                <Route path="/verify/user" element={<VerifyAccountViaEmail />}></Route>
                <Route path="/loading" element={<Loading />}></Route>
                <Route path="/favorite" element={<Favourite />}></Route>
                <Route path="/media/:uuid" element={<SeeDetailAvatar />}></Route>
                <Route path="/category/products/:categories" element={<ListItem />}></Route>
                <Route path="*" element={<NotFound404 />}></Route>
            </Routes>
           
            <Layout>
                {/* <ButtonRipple>Hello World</ButtonRipple> */}
                <SearchModal />
                <CartModal />
                {
                    (userLogin=== "false" || userLogin=== false) && 
                    <AuthModal />
                    
                }
                {
                    userLogin=== "true" && <UserPage in4={in4User} />
                }
                {quickViewData && <Suspense fallback={<div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'fixed', zIndex: 99999}}> <CircularProgress /></div>}><QuickViewModal /></Suspense>}
                {quickShopData && <QuickShopModal />}
            </Layout>
        </div>
    )
}

export default App
