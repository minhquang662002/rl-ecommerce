import React, {lazy, useEffect} from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import CartModal from "./modals/cart/CartModal"
import SearchModal from "./modals/search/SearchModal"
import Layout from "./modals/Layout"
import AuthModal from "./modals/auth/AuthModal"
import MainPage from "./page/main/MainPage"
// import FavoritePage from "./page/favorite/FavoritePage"
import QuickShopModal from "./modals/quickshop/QuickShopModal"
import DetailPage, { fakeSleep } from "./page/detail/DetailPage"
import AccountPage from "./page/account/AccountPage"
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
// import { result } from "lodash"
import SeeDetailAvatar from "../UserPage/SeeDetailAvatar"
import ListItem from "../ListItem/ListItem"
import LoginPage from "./LoginPage/LoginPage"
import SignupPage from "./Signup/SignupPage"
// import AccountPage from "../Account/AccountPage"
import store from "../../resources/redux/store/main"
import { Provider } from "react-redux"
import Setting from "../Setting/Setting"
import PaymentSuccess from "../Payment/PaymentSuccess"
import MessagePage from "../MessagePage/MessagePage"
import Shoppage from "../ShopPage/Shoppage"


const QuickViewModal = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./modals/quickview/QuickViewModal")), 1250)
    })
  })
function App() {
    
    const {
        navChoices: { quickViewData, quickShopData },
    } = useContext(NavContext)
    const [userLogin, setUserLogin]= useState(()=> false)
    const [in4User, setIn4User]= useState(()=> [])
    const [idshopuser, setidshopuser]= useState(()=> "")
    useScrollToTop()
    useEffect(()=> {
        (async()=> {
            nProgress.configure({ easing: "ease", speed: 500, trickleSpeed: 600, showSpinner: false, parent: "#root" })
            axios.interceptors.request.use(request=> {
                nProgress.start()
                return request
            }, error=> {
                return Promise.reject(error)
            })
            axios.interceptors.response.use(response=> {
                nProgress.done()
                return response
            }, err=> {
                nProgress.done()
                return Promise.reject(err)
            })
            axios.interceptors.response.eject(response=> {
                nProgress.done()
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
                    setidshopuser(()=> result[1])
                    localStorage.setItem("u_ol", result[0][0]?.id_user)
                }
            } catch (error) {
                console.log(error)
                setUserLogin("false")
                nProgress.done()
            }
        })()
    }, [])
    return (
        <Provider store={store}>    
            <div className="oojt">
                <Navbar id_user={in4User[0]?.id_user} avt_user={in4User[0]?.avt_user} lastname={in4User[0]?.lastname} userLogin={userLogin} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/collections/:section/products/:product"
                        element={<DetailPage buyer={in4User[0]?.id_user} user_={in4User[0]}  />}
                    />
                    <Route path="/collections/products/:product" element={<DetailPage buyer={in4User[0]?.id_user} user_={in4User[0]} />}></Route>
                    <Route
                        path="/collections/:section"
                        element={<CollectionPage />}
                    />
                    <Route path="/account" element={<AccountPage id_user={in4User[0]?.id_user} />} />
                    <Route path="/verify/user" element={<VerifyAccountViaEmail />}></Route>
                    <Route path="/loading" element={<Loading />}></Route>
                    <Route path="/favorite" element={<Favourite id_user={in4User[0]?.id_user} />}></Route>
                    <Route path="/media/:uuid" element={<SeeDetailAvatar />}></Route>
                    <Route path="/category/products/:categories" element={<ListItem />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/signup" element={<SignupPage />}></Route>
                    <Route path="*" element={<NotFound404 message="The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct." />}></Route>
                    <Route path="/check/payment/success.html" element={<PaymentSuccess id_user={in4User[0]?.id_user} /> } />
                    <Route path="/shop" element={<Shoppage {...in4User[0]}/>}></Route>
                    {
                    <Route path="/message/t/:id" element={<MessagePage {...in4User[0]} />} ></Route>
                    }
                    
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
                        userLogin=== "true" && <UserPage in4={in4User} idshopuser={idshopuser} />
                    }
                    <Setting in4={in4User} />
                    {quickViewData && <Suspense fallback={<div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'fixed', zIndex: 99999}}> <CircularProgress /></div>}><QuickViewModal /></Suspense>}
                    {quickShopData && <QuickShopModal />}
                </Layout>
            </div>
        </Provider>
    )
}

export default App
