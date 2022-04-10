import "./Product.css";
import { useState, useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NavContext } from "../../context/NavContext";
import { Link } from "react-router-dom";
import Item from "antd/lib/list/Item";

const Product = ({ item, section }) => {
    const { title, price, color, size, imageHover, imageindex, id_product, decription, categories} = item;
    const [displayedType, setdisplayedType] = useState(0);
    const [loading, setLoading] = useState(true);
    const { setNavChoices } = useContext(NavContext);

    return (
        <div className="Product">
            <Link
                to={`/collections/${section?.replace(" ", "-")}/products/${title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`} state={{id_product: id_product, title, price, color, size, decription, categories }}
            >
                <div className="Product__image--holder">
                    <img
                        className="Product__image mainImage"
                        src={imageindex}
                        onLoad={() => setLoading(false)}
                        loading="lazy"
                    />
                    <img
                        className="Product__image subImage"
                        src={imageHover}
                        loading="lazy"
                    />
                    <div
                        className="Product__image--placeholder"
                        style={{ visibility: loading ? "visible" : "hidden" }}
                    >
                        <p className="placeholder__content">unilight</p>
                    </div>
                    {!loading && (
                        <>
                            <div
                                className="Product__button--holder"
                                onClick={(e) => e.preventDefault()}
                            >
                                <div
                                    className="Product__button"
                                    onClick={() =>
                                        setNavChoices((state) => ({
                                            ...state,
                                            quickViewData: {
                                                ...item,
                                                currentImg:
                                                    imageindex,
                                                type: displayedType,
                                            },
                                        }))
                                    }
                                >
                                    <div className="Product__button--content">
                                        <p>Quick View</p>
                                        <p className="Product__button--icon">
                                            <VisibilityIcon />
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="Product__button"
                                    onClick={() =>
                                        setNavChoices((state) => ({
                                            ...state,
                                            // quickShopData: {
                                            //     ...item,
                                            //     currentImg:
                                            //         color[displayedType]
                                            //             .images[0],
                                            // },
                                        }))
                                    }
                                >
                                    <div className="Product__button--content">
                                        <p>Quick Shop</p>
                                        <p className="Product__button--icon">
                                            <ShoppingCartOutlinedIcon />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Product__size--holder">
                                {size.split(",")}
                            </div>
                            <div className="Product__favorite--holder">
                                <div className="Product__favorite--button">
                                    <FavoriteBorderOutlinedIcon />
                                </div>
                                <div className="Product__favorite--tooltip">
                                    Browse wishlist
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Link>
            <div className="Product__info--holder">
                <Link
                    to={`/collections/${section?.replace(
                        " ",
                        "-"
                    )}/products/${title.toLowerCase().replace(" ", "-")}`}
                >
                    <p className="Product__title">{title}</p>
                </Link>
                <p className="Product__price">${price}</p>
                <div className="Product__colors--holder">
                    {color?.split(",").map((item, index) => {
                        return (
                            <div
                                className="Product__color--outer"
                                key={index}
                                style={{
                                    background: item
                                }}
                                onClick={() => {
                                    if (displayedType !== index) {
                                        setdisplayedType(index);
                                        setLoading(true);
                                    }
                                }}
                            >
                                <div
                                    className="Product__color"
                                    key={index}
                                    style={{ background: `${Item}` }}
                                />
                                <div className="Product__color--tooltip">
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Product;
