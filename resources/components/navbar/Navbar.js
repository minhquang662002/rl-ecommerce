import "./Navbar.css"
import useSticky from "../../utils/useSticky"
import { useRef, useContext, useState, useEffect } from "react"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { NavContext } from "../context/NavContext"
import { Link } from "react-router-dom"
import { getShoppingCart } from "../../action/get_cart_shopping"
import { MyContext } from "../../ContextApp/ContextContainer"
import MenuFilter from "./FilterProducts"
import Button from "@mui/material/Button"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications'
import Notifications from "../../notifications/Notifications"
import Messenger from "../../Message/Message"
import { fetchquantitynotifications } from "../../firebase/fetch_notifications/fetch_notifications"

function Navbar(props) {
    
    const [listNoLogin, setListNoLogin]= useState(()=> localStorage.getItem("idOrder") || [])
    const navRef = useRef()
    let isSticky = useSticky(navRef)
    const { setNavChoices } = useContext(NavContext)
    const { shoppingCart, setDataShoppingCart, lengthFavorite, dataShoppingCart }= useContext(MyContext)
    const [openPopup, setOpenPopup]= useState(()=> false)
    const [openMessage, setOpenMessage]= useState(()=> false)
    const [quantityOfFavoriteandCart, setquantityOfFavoriteandCart]= useState({
        favorite: localStorage.getItem("item_favorite")?.split(",").length,
        cart: localStorage.getItem("idOrder")?.split(",").length
    })
    useEffect(()=> {
        setquantityOfFavoriteandCart(prev=> ({...prev, favorite: lengthFavorite, cart: dataShoppingCart?.length}))
    }, [lengthFavorite, dataShoppingCart])  
    useEffect(()=> {
        if(props.id_user) {
            fetchquantitynotifications(props.id_user, props.setUnWatch)
        }
    }, [props.id_user])
    return (
        <div
            className="Navbar"
            ref={navRef}
            style={{
                position: isSticky ? "sticky" : "static",
                animation: isSticky ? "navIn 0.5s ease" : "",
                boxShadow: isSticky
                    ? "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
                    : "",
            }}
        >
            <Link to="/">
                <p className="navbar__shopBrand">UNILIGHT</p>
            </Link>
            <div className="navbar__categories--container">
                <Link to={{pathname: `/category/products/${"all"}`, search: `current_page=${1}`}}>
                    <Button className="navbar__categories">Shop</Button>
                </Link>
                <Link to={{pathname: `/category/products/${"random"}`, search: `current_page=${1}`}}>
                    <Button className="navbar__categories">Product</Button>
                </Link>
                <Link to={{pathname: `/category/products/${"sale"}`, search: `current_page=${1}`}}>
                    <Button className="navbar__categories" onClick={()=> {
                        
                    }}>
                        Sale
                    </Button>
                </Link>
                <MenuFilter />
            </div>
            <div className="navbar__choices">
                <span
                    className="navbar__icons"
                    onClick={() => {
                        setNavChoices((state) => ({ ...state, search: true }))
                    }}
                >
                    <SearchOutlinedIcon />
                </span>
                <span
                    className="navbar__icons"
                    onClick={() => {
                        setNavChoices((state) => ({ ...state, login: true }))
                    }}
                >
                    <PersonOutlineOutlinedIcon />
                </span>
                {
                    props.userLogin=== "true" &&
                    <>
                        <div className="cn4" style={{position: "relative"}}>
                            <span
                                className="navbar__icons"
                                
                            >   
                                <img className="pw4" onClick={() => setOpenMessage(prev=> !prev)} src="https://seeklogo.com/images/F/facebook-messenger-logo-1B1179FB01-seeklogo.com.png" style={{width: 22, height: 22, filter: "brightness(0%)", objectFit: "cover", cursor: "pointer"}} />
                            </span>
                            {
                                openMessage=== true &&
                                <Messenger id_user={props.id_user} avt_user={props.avt_user} lastname={props.lastname} openMessage={openMessage} setOpenMessage={setOpenMessage} />
                            }
                        </div>
                        <div className="cn12" style={{position: "relative"}}>
                            <span
                                className="navbar__icons"
                                onClick={()=> setOpenPopup(prev=> !prev)}
                            >   
                                <NotificationsIcon />
                            </span>
                            {
                                props.unwatch > 0 &&
                            <div style={{position: "absolute", top: -5, right: -5, padding: 5, color: "#fff", backgroundColor: "#cc0000", display: "flex", justifyContent: 'center',alignItems: 'center', borderRadius: "50%", width: 16, height: 16, zIndex: 997, fontSize: 12, cursor: "pointer"}}>{props.unwatch}</div>
                            }
                            {
                                openPopup=== true &&
                            <Notifications setUnWatch={props.setUnWatch} id_user={props.id_user} setOpenPopup={setOpenPopup}/>
                            }
                        </div>
                    </>
                }
                {
                    props.userLogin== "true" &&
                    <>
                        <Link to="/favorite">
                            <div className="navbar__icons" style={{position: "relative"}}>
                                {
                                    quantityOfFavoriteandCart.favorite >= 0  &&
                                <div style={{position: "absolute", top: 0, right: 0, width: 14, height: 14, borderRadius: "50%", backgroundColor: "#000", color: "#fff", fontSize: 12,display: "flex", justifyContent: "center", alignItems: "center" }}><span>{quantityOfFavoriteandCart.favorite}</span></div>
                                }
                                <FavoriteBorderOutlinedIcon />
                            </div>
                        </Link>
                        <div
                            className="navbar__icons"  style={{position: "relative"}}
                            onClick={() =>
                                {setNavChoices((state) => ({ ...state, cart: true }));getShoppingCart(setDataShoppingCart, listNoLogin, props.id_user)}
                            }
                        >
                            <div style={{position: "absolute", top: -10, right: -5, width: 20, height: 20, borderRadius: "50%", backgroundColor: "#000", color: "#fff", fontSize: 12,display: "flex", justifyContent: "center", alignItems: "center" }}><span>{quantityOfFavoriteandCart.cart}</span></div>
                            <ShoppingCartOutlinedIcon />
                        </div>
                        <div
                            className="navbar__icons"  style={{position: "relative"}}
                            onClick={() =>
                                setNavChoices((state) => ({ ...state, setting: true }))
                            }
                        >
                            <SettingsOutlinedIcon />
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default Navbar
