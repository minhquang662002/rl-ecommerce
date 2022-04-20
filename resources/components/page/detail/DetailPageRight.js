import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { Link } from "react-router-dom"

const DetailPageRight = (props) => {
    const [size, setSize]= useState(()=> props.size?.split(",")[0])
    const [color, setColor]= useState(()=> props.color?.split(",")[0])
    return (
        <div className={`DetailPage__product--info ${props.className}`}>
            <h2 className="DetailPage__product--title">{props.title}</h2>
            <p className="DetailPage__product--price">
                ${props.price}
            </p>
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
                                onClick={()=> setColor(()=> item)}
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
                        );
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
                                    onClick={()=> setSize(()=> item)}
                                    style={{color: item=== (size || props.size?.split(",")[0]) ? "white" : "black", backgroundColor: item=== (size || props.size?.split(",")[0])  ? "black": "white"}}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="modifier">
                    <div
                        className="CartModal__quanity"
                        style={{ margin: "0 auto" }}
                    >
                        <div className="CartModal__quanity--decrease" style={{fontWeight: 600, fontSize: 24, cursor: "pointer"}}>-</div>
                        <input
                            type="number"
                            min={1}
                            max={99}
                            defaultValue={1}
                            style={{fontWeight: 600, fontSize: 18}}
                        />
                        <div className="CartModal__quanity--increase" style={{fontWeight: 600, fontSize: 24, cursor: "pointer"}}>+</div>
                    </div>
                    <button
                        type="submit"
                        className="CartModal__buttons"
                        style={{ background: "rgb(36, 219, 219)" }}
                    >
                        ADD TO CART
                    </button>
                    <div className="DetailPage__favorite--button">
                        <FavoriteBorderOutlined />
                    </div>
                </div>
                <div style={{display: 'inline-flex', height: 40, alignItems: 'center'}}>
                    <div style={{display: 'inherit', alignItems: 'center',justifyContent: 'center'}}>
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
            </div>
        </div>
    );
};

export default DetailPageRight;
