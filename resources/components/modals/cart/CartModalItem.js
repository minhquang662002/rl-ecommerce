import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./CartModalItem.css";
import { useState } from "react";

const CartModalItem = ({ item }) => {
    const { title, price, color, size } = item;
    const [quanity, setQuanity] = useState(1);
    const handleChange = (e) => {
        const { value } = e.target;
        setQuanity(value);
    };
    return (
        <div className="CartModal__items">
            <img className="CartModal__item--images" src={color[0].images[0]} />
            <div>
                <div className="CartModal__item--info">
                    <p className="CartModal__item--title">{title}</p>
                    <p className="CartModal__item--type">
                        {color[0].type} / {size[0]}
                    </p>
                    <p className="CartModal__item--price">
                        ${price.toFixed(2)}
                    </p>
                </div>
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
                            type="number"
                            value={quanity}
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
            </div>
        </div>
    );
};

export default CartModalItem;
