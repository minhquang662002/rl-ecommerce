import "./Product.css";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Product = ({ item }) => {
    const { title, price, color, size } = item;
    const [displayedType, setdisplayedType] = useState(0);
    return (
        <div className="Product">
            <div className="Product__image--holder">
                <img
                    className="Product__image mainImage"
                    src={color[0].images[0]}
                />
                <img
                    className="Product__image subImage"
                    src={color[0].images[1]}
                />
                <div className="Product__button--holder">
                    <div className="Product__button">
                        <div className="Product__button--content">
                            <p>Quick View</p>
                            <p className="Product__button--icon">
                                <VisibilityIcon />
                            </p>
                        </div>
                    </div>
                    <div className="Product__button">
                        <div className="Product__button--content">
                            <p>Quick shop</p>
                            <p className="Product__button--icon">
                                <ShoppingCartOutlinedIcon />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Product__size--holder">{size.join(", ")}</div>
            </div>
            <div className="Product__info--holder">
                <p className="Product__title">{title}</p>
                <p className="Product__price">${price?.toFixed(2)}</p>
                <div className="Product__colors--holder">
                    {color?.map((item, index) => {
                        return (
                            <div className="Product__color--outer">
                                <div
                                    className="Product__color"
                                    key={index}
                                    style={{ background: `${item?.type}` }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Product;
