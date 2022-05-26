import "./CartModal.css"
import CloseIcon from "@mui/icons-material/Close"
import CartModalItem from "./CartModalItem"
import { Suspense, useContext, useState, lazy, useEffect, Fragment } from "react"
import { NavContext } from "../../context/NavContext"
import { useInView } from "react-intersection-observer"
// import Loading from "../../loading/Loading"
import { MyContext } from "../../../ContextApp/ContextContainer"
import LoadingSuspense, { LoadingSuspense2 } from "../../loading/LoadingSuspense"
import Checkout from "./Checkout"
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
    // const [loading, setLoading]= useState(()=> ({
    //     loading1: false,
    //     loading2: false
    // }))
    const [result, setresult]= useState(()=> [])
    useEffect(()=> {
        if(dataShoppingCart?.length> 0) {
            setresult(
                dataShoppingCart?.reduce((accum, val) => {
                    const dupeIndex = accum.findIndex(arrayItem => arrayItem.id_product === val.id_product);
            
                    if (dupeIndex === -1) {
                      // Not found, so initialize.
                      accum.push({
                        qty: 1,
                        ...val
                      });
                    } else {
                      // Found, so increment counter.
                      accum[dupeIndex].qty++;
                    }
                    return accum;
                }, [])
            )
        }
    }, [dataShoppingCart])
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
                        {
                            (dataShoppingCart== undefined || dataShoppingCart == null) && "You don't order any product ."
                        }
                        {
                           ((typeof dataShoppingCart)=="string" && dataShoppingCart== "hihi" )&& "You don't order any product ."
                        }
                        {((typeof dataShoppingCart)=="object" && dataShoppingCart.length> 0) && result?.map((item, key) => (
                            <div key={key} style={{padding: "10", marginBottom: 10, borderRadius: 8, background: "#f2f0f5",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                <CartModalItem item={item} />
                                <Checkout {...item} />
                            </div>
                        ))}
                        {
                            dataShoppingCart.length===0 && <LoadingSuspense2 />
                        }
                    </div>
                </CartModalContainer>
            </Suspense>
        </div>
    )
}

export default CartModal
