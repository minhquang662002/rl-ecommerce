import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined"
import { useState } from "react"
import { Link } from "react-router-dom"
import { addfavorite } from "../../../action/add_favorite"
import { additemtocart } from "../../../action/add_item_to_cart"
import IconAlerts from "./AddSuccess"
import BuyNow from "./ConfirmOrder"
import OrderSuccess from "./OrderSuccess"

const DetailPageRight = (props) => {
    const [size, setSize]= useState(()=> props.size?.split(",")[0])
    const [color, setColor]= useState(()=> props.color?.split(",")[0])
    const [orderSuccess, setOrderSuccess]= useState(()=> false)
    const [infoItem, setInfoItem]= useState(()=> ({
        image: "",
        color_: props.color?.split(",")[0],
        size_: props.size?.split(",")[0],
        quantity: 1
    }))
    const [check, setCheck]= useState(()=> false)
    return (
        <>
            <div className={`DetailPage__product--info ${props.className}`}>
            <h2 className="DetailPage__product--title">{props.title}</h2>
            <div className="DetailPage__product--price">
                <div style={{margin: "8px 0"}}>
                    {
                        parseInt(props.sale_percent) < 1 && parseInt(props.sale_specific_money) <1 &&
                        <div className="sjaiwajw">
                            ${props.price}
                        </div>
                    }
                    {
                        parseInt(props.sale_percent) > 0 &&
                        <div className="sjaiwajw">
                            <span style={{textDecorationLine: "line-through"}}>${props.price}</span>
                            &nbsp;
                            &nbsp;
                            <span style={{fontSize: 32, color: "red"}}>${(parseInt(props.price) - parseInt(props.sale_percent / 100 * parseInt(props.price)))}</span>
                        </div>
                    }
                    {
                        parseInt(props.sale_specific_money) > 0 &&
                        <div className="sjaiwajw">
                            <span style={{textDecorationLine: "line-through"}}>${props.price}</span>
                            &nbsp;
                            &nbsp;
                            <span style={{fontSize: 32, color: "red"}}>${(parseInt(props.price) - parseInt(props.sale_specific_money))}</span>
                        </div>
                    }
                </div>
            </div>
            <p className="DetailPage__product--description">
                {props.decription}
            </p>
            <div className="QuickViewModal__color--container">
                <p>COLOR: {color || props.color?.split(",")[0]}</p>
                 <div className={`QuickViewModal__color--holder ${props.className1}`}>
                    {props.color?.split(",").map((item, index) => {
                            return (
                                <div
                                    className="QuickViewModal__color--outer"
                                    key={index}
                                    onClick={()=> {setColor(()=> item);setInfoItem(prev=> ({...prev, color_: item}))}}
                                    style={{
                                        borderColor:
                                            (color || props.color?.split(",")[0]) === item
                                                ? "black"
                                                : "rgb(196, 189, 189)",
                                                backgroundColor: item,
                                    }}
                                >
                                    <div
                                        className="QuickViewModal__color"
                                        style={{
                                            background: `${item.type}`,
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className={`QuickViewModal__size--container`}>
                        <p>SIZE: {size || props.size?.split(",")[0]}</p>
                        <div className={`QuickViewModal__size--holder ${props.className2}`}>
                            {props.size?.split(",").map((item, index) => {
                                return (
                                    <div
                                        className="QuickViewModal__size--button"
                                        key={index}
                                        onClick={()=> {setSize(()=> item);setInfoItem(prev=> ({...prev, size_: item}))}}
                                        style={{color: item=== (size || props.size?.split(",")[0]) ? "white" : "black", backgroundColor: item=== (size || props.size?.split(",")[0])  ? "black": "white"}}
                                    >
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {
                        props.author_shop != props.buyer &&
                        <>
                        <div className="modifier">
                        <div
                            className="CartModal__quanity"
                            style={{ margin: "0 auto" }}
                        >
                            <button disabled={infoItem?.quantity<=0 ? true : false} className="CartModal__quanity--decrease" style={{fontWeight: 600, fontSize: 24, cursor: "pointer", backgroundColor: "inherit"}} onClick={()=> setInfoItem(prev=> ({...prev, quantity: infoItem.quantity - 1}))}>-</button>
                            <input
                                type="number"
                                min={1}
                                max={99}
                                value={infoItem.quantity}
                                style={{fontWeight: 600, fontSize: 18}}
                                onChange={(e)=> setInfoItem(prev=> ({...prev, quantity: e.target.value}))}
                            />
                            <button disabled={infoItem?.quantity>=100 ? true : false} className="CartModal__quanity--increase" style={{fontWeight: 600, fontSize: 24, cursor: "pointer", backgroundColor: "inherit"}} onClick={()=> setInfoItem(prev=> ({...prev, quantity: infoItem.quantity + 1}))}>+</button>
                        </div>

                        <button
                            type="submit"
                            className="CartModal__buttons"
                            style={{ background: "rgb(36, 219, 219)" }}
                            onClick={()=> {setOrderSuccess(()=> true);additemtocart(props.id_product, props.author_shop)}}
                        >
                            ADD TO CART
                        </button>
                        <div className="DetailPage__favorite--button" style={{cursor: "pointer"}} onClick={()=> addfavorite(props.buyer, props.id_product, setCheck)}>
                            <FavoriteBorderOutlined />
                        </div>
                        </div>
                        <br />
                        <BuyNow {...infoItem} image={props.image} {...props} />
                        <div className="ppp" style={{display: 'inline-flex', height: 40, alignItems: 'center'}}>
                            <div className="pa2" style={{display: 'inherit', alignItems: 'center',justifyContent: 'center'}}>
                            <span style={{height: 18}}> Categories:	&nbsp;   </span> 
                            </div>
                            {
                                props.categories?.split(",").map((item, key)=> (
                                <Link to={`/collection/${item.toLowerCase().trim().replaceAll(" ", '-')}`} key={key} >
                                    <div className="categories" style={{fontSize: 16, fontWeight: 400, textTransform: 'lowercase'}}>{item},</div>
                                </Link>
                            ))
                            }
                        </div>
                    </>
                    }
                </div>
            </div>
            {
                orderSuccess=== true &&
                <OrderSuccess orderSuccess={orderSuccess} setOrderSuccess={setOrderSuccess} />
            }
            {
                check=== true && 
                <IconAlerts setCheck={setCheck} />
            }
        </>
    )
}

export default DetailPageRight
