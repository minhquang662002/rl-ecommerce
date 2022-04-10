import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { Link } from "react-router-dom"

const DetailPageRight = (props) => {
    const [size, setSize]= useState(()=> props.size?.[0])
    return (
        <div className="DetailPage__product--info">
            <h2 className="DetailPage__product--title">{props.title}</h2>
            <p className="DetailPage__product--price">
                ${props.price}
            </p>
            <p className="DetailPage__product--description">
                {props.decription}
            </p>
            <div className="QuickViewModal__color--container">
                <p>COLOR: {props.color[props.currentColor]}</p>
                <div className="QuickViewModal__color--holder">
                    {props.color?.split(",").map((item, index) => {
                        return (
                            <div
                                className="QuickViewModal__color--outer"
                                key={index}
                                style={{
                                    borderColor:
                                        props.currentColor === index
                                            ? "black"
                                            : "rgb(196, 189, 189)",
                                            backgroundColor: item
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
                <div className="QuickViewModal__size--container">
                    <p>SIZE: {size}</p>
                    <div className="QuickViewModal__size--holder">
                        {props.size.split(",").map((item, index) => {
                            return (
                                <div
                                    className="QuickViewModal__size--button"
                                    key={index}
                                    onClick={()=> setSize(()=> item)}
                                    style={{color: item=== size ? "white" : "black", backgroundColor: item=== size ? "black": "white"}}
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
                <div style={{display: 'inline-flex'}}>
                    Categories:	&nbsp; {
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
