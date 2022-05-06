import "./CartModal.css"
import CloseIcon from "@mui/icons-material/Close"
import CartModalItem from "./CartModalItem"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { Suspense, useContext, useState, lazy } from "react"
import { NavContext } from "../../context/NavContext"
import { useInView } from "react-intersection-observer"
// import Loading from "../../loading/Loading"
import { MyContext } from "../../../ContextApp/ContextContainer"
import LoadingSuspense, { LoadingSuspense2 } from "../../loading/LoadingSuspense"
import { height } from "@mui/system"
const CartModalContainer = lazy(() => {
return new Promise(resolve => {
        setTimeout(() => resolve(import("./CartModalContainer")), 1250);
    });
});

const CartModal = () => {
    const { ref, inView }= useInView({
        threshold: 0,
    })
    const { dataShoppingCart }= useContext(MyContext)
    const { setNavChoices, navChoices } = useContext(NavContext)
    const [loading, setLoading]= useState(()=> ({
        loading1: false,
        loading2: false
    }))
    return (
        <div
            className="CartModal"
            style={{
                transform: navChoices.cart
                    ? "translateX(0)"
                    : "translateX(100%)"
            }}
        >  
            <Suspense fallback={<LoadingSuspense />}>
                <CartModalContainer>
                    <div className="CartModal__header NavModal__header">
                        <p>SHOPPING CART</p>
                        <span 
                            ref={ref}
                            className="NavModal__close--button"
                            onClick={() =>
                                setNavChoices((state) => ({ ...state, cart: false }))
                            }
                        >
                            <CloseIcon />
                        </span>
                    </div>
                    <div className="CartModal__body" style={{height: dataShoppingCart?.length=== 0 ? 200 : "auto"}}>
                        {dataShoppingCart.length> 0 && dataShoppingCart?.map((item, key) => {
                            return <CartModalItem item={item} key={key} />
                        })}
                        {
                            dataShoppingCart.length===0 && <LoadingSuspense2 />
                        }
                    </div>
                    <div className="CartModal__footer">
                        <div className="CartModal__footer--sale">
                            <div className="sale__amount">
                                <LocalOfferIcon />
                                <span style={{ fontWeight: "bolder" }}>
                                    5% OFF(-$0.75)
                                </span>
                            </div>
                        </div>
                        <div className="CartModal__footer--calculation">
                            <p style={{ fontWeight: "bolder" }}>Subtotal:</p>
                            <div style={{ textAlign: "right" }}>
                                <p>$15.00 - $0.75</p>
                                <p style={{ fontWeight: "bolder" }}>$14.25</p>
                            </div>
                        </div>
                        <div className="CartModal__button--container">
                            <div className="CartModal__cart--button CartModal__buttons">
                                VIEW CART
                            </div>
                            <div className="CartModal__checkout--button CartModal__buttons">
                                CHECK OUT
                            </div>
                            <img
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                                src="https://res.cloudinary.com/dt7azkk7b/image/upload/v1635006729/e-commerce/auth_ozrwel.png"
                            />
                        </div>
                    </div>
                </CartModalContainer>
            </Suspense>
        </div>
    )
}

export default CartModal
