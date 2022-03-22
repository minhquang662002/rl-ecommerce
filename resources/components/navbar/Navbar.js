import "./Navbar.css";
import useSticky from "../../utils/useSticky";
import { useRef, useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavContext } from "../context/NavContext";
function Navbar() {
    const navRef = useRef();
    let isSticky = useSticky(navRef);
    const { setNavChoices } = useContext(NavContext);
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
            <p className="navbar__shopBrand">UNILIGHT</p>
            <div className="navbar__categories--container">
                <p className="navbar__categories">Shop</p>
                <p className="navbar__categories">Product</p>
                <p className="navbar__categories">Sale</p>
            </div>
            <div className="navbar__choices">
                <span
                    className="navbar__icons"
                    onClick={() => {
                        setNavChoices((state) => ({ ...state, search: true }));
                    }}
                >
                    <SearchOutlinedIcon />
                </span>
                <span
                    className="navbar__icons"
                    onClick={() => {
                        setNavChoices((state) => ({ ...state, login: true }));
                    }}
                >
                    <PersonOutlineOutlinedIcon />
                </span>
                <span className="navbar__icons">
                    <FavoriteBorderOutlinedIcon />
                </span>
                <span
                    className="navbar__icons"
                    onClick={() =>
                        setNavChoices((state) => ({ ...state, cart: true }))
                    }
                >
                    <ShoppingCartOutlinedIcon />
                </span>
            </div>
        </div>
    );
}

export default Navbar;
