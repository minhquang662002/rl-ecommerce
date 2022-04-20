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


function Navbar() {
    const [listNoLogin, setListNoLogin]= useState(()=> localStorage.getItem("idOrder") || [])
    const navRef = useRef()
    let isSticky = useSticky(navRef)
    const { setNavChoices } = useContext(NavContext)
    const [data, setData]= useState(()=> [])
    const { shoppingCart, setDataShoppingCart }= useContext(MyContext)
    const [quantityOfFavoriteandCart, setquantityOfFavoriteandCart]= useState({
        favorite: localStorage.getItem("item_favorite"),
        cart: localStorage.getItem("idOrder")
    })
    useEffect(()=> {
        (async()=> {    

        })()
    }, [])
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
                <Button className="navbar__categories">Shop</Button>
                <Button className="navbar__categories">Product</Button>
                <Button className="navbar__categories">Sale</Button>
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
                <Link to="/favorite">
                    <div className="navbar__icons" style={{position: "relative"}}>
                        <div style={{position: "absolute", top: 0, right: 0, width: 14, height: 14, borderRadius: "50%", backgroundColor: "#000", color: "#fff", fontSize: 12,display: "flex", justifyContent: "center", alignItems: "center" }}><span>{quantityOfFavoriteandCart.favorite?.split(",").length}</span></div>
                        <FavoriteBorderOutlinedIcon />
                    </div>
                </Link>
                <div
                    className="navbar__icons"  style={{position: "relative"}}
                    onClick={() =>
                        {setNavChoices((state) => ({ ...state, cart: true }));getShoppingCart(setDataShoppingCart, listNoLogin)}
                    }
                >
                    <div style={{position: "absolute", top: 0, right: 0, width: 14, height: 14, borderRadius: "50%", backgroundColor: "#000", color: "#fff", fontSize: 12,display: "flex", justifyContent: "center", alignItems: "center" }}><span>{quantityOfFavoriteandCart.cart?.split(",").length}</span></div>
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar
