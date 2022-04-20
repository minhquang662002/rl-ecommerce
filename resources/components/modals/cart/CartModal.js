import "./CartModal.css"
import CloseIcon from "@mui/icons-material/Close"
import CartModalItem from "./CartModalItem"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { Suspense, useContext, useState, lazy } from "react"
import { NavContext } from "../../context/NavContext"
import { useInView } from "react-intersection-observer"
import Loading from "../../loading/Loading"
import { MyContext } from "../../../ContextApp/ContextContainer"
import LoadingSuspense from "../../loading/LoadingSuspense"
const CartModalContainer = lazy(() => {
return new Promise(resolve => {
    setTimeout(() => resolve(import("./CartModalContainer")), 1250);
});
});

const CartModal = () => {
    const { ref, inView }= useInView({
        threshold: 0,
    })
    const [data, setData]= useState(()=> [])
    const { dataShoppingCart }= useContext(MyContext)

    const tempItems = [
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
    ]
    const { setNavChoices, navChoices } = useContext(NavContext)

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
                    <div className="CartModal__body">
                        {dataShoppingCart?.map((item, key) => {
                            return <CartModalItem item={item} key={key} />
                        })}
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
