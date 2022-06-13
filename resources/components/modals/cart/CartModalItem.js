import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./CartModalItem.css";
import { useState } from "react";

const CartModalItem = ({ item, cart }) => {
    const { title, price, color, size, imageindex, qty } = item;
    const [quanity, setQuanity] = useState(1);
    const handleChange = (e) => {
        const { value } = e.target;
        setQuanity(value);
    };
    return (
        <div className="CartModal__items" style={{padding: 10}}>
            <img className="CartModal__item--images" src={imageindex} />
            <div>
                <div className="CartModal__item--info">
                    <p className="CartModal__item--title">{title}</p>
                    <p className="CartModal__item--type">
                        {color?.split(",")[0]} / {size?.split(",")[0]}
                    </p>
                    <p className="CartModal__item--price">
                        ${price}
                    </p>
                </div>
                {
                    cart!== true &&
                    <form className="CartModal__item--modify">
                        <div className="CartModal__quanity">
                            <span
                                className="CartModal__quanity--decrease"
                                onClick={() => {
                                    quanity > 1 && setQuanity((state) => state - 1);
                                }}
                            >
                                {quanity === 1 ? (
                                    <DeleteOutlineOutlinedIcon
                                        style={{ fontSize: "1rem" }}
                                    />
                                ) : (
                                    "-"
                                )}
                            </span>
                            <input
                                style={{backgroundColor: "#f2f0f5", color: "#000",}}
                                type="number"
                                value={qty}
                                onChange={handleChange}

                            />
                            <span
                                className="CartModal__quanity--increase"
                                onClick={() =>
                                    quanity < 99 && setQuanity((state) => state + 1)
                                }
                            >
                                +
                            </span>
                        </div>
                        <div className="CartModal__modifier">
                            <EditOutlinedIcon />
                            <DeleteOutlineOutlinedIcon />
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};

export default CartModalItem;
