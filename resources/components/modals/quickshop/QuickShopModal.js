import "./QuickShopModal.css";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const QuickShopModal = () => {
    const {
        navChoices: { quickShopData },
        setNavChoices,
    } = useContext(NavContext);

    const [displayedType, setDisplayedType] = useState(0);
    const [displayedSize, setDisplayedSize] = useState(0);
    return (
        <form className="QuickShopModal">
            <div className="QuickShopModal__header">
                <div className="QuickShopModal__product">
                    <div
                        className="QuickShopModal__image"
                        style={{
                            backgroundImage: `url(${quickShopData?.color?.[0]?.images?.[0]})`,
                        }}
                    />
                    <div className="QuickShopModal__mainInfo">
                        <p className="QuickShopModal__title">
                            {quickShopData?.title}
                        </p>
                        <p className="QuickShopModal__price">
                            ${quickShopData?.price?.toFixed(2)}
                        </p>
                    </div>
                </div>
                <CloseIcon onClick={() => setNavChoices((state) => !state)} />
            </div>
            <div className="QuickShopModal__body">
                <div className="QuickShopModal__color--section">
                    <p>COLOR: {quickShopData?.color?.[displayedType]?.type}</p>

                    <div className="QuickViewModal__color--holder">
                        {quickShopData?.color?.map((item, index) => {
                            return (
                                <div
                                    className="QuickViewModal__color--outer"
                                    key={index}
                                    style={{
                                        borderColor:
                                            displayedType === index
                                                ? "black"
                                                : "rgb(196, 189, 189)",
                                    }}
                                    onClick={() => setDisplayedType(index)}
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
                </div>
                <div className="QuickShopModal__size--section">
                    <p>SIZE: {quickShopData?.size?.[displayedSize]}</p>

                    <div className="QuickViewModal__size--holder">
                        {quickShopData?.size?.map((item, index) => {
                            return (
                                <div
                                    className="QuickViewModal__size--button"
                                    key={index}
                                    style={{
                                        background:
                                            displayedSize === index
                                                ? "black"
                                                : "white",
                                        color:
                                            displayedSize === index
                                                ? "white"
                                                : "black",
                                    }}
                                    onClick={() => setDisplayedSize(index)}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className="CartModal__quanity"
                    style={{ margin: "0 auto" }}
                >
                    <span className="CartModal__quanity--decrease">-</span>
                    <input type="number" min={1} max={99} defaultValue={1} />
                    <span className="CartModal__quanity--increase">+</span>
                </div>
            </div>
            <div className="QuickShopModal__footer">
                <button
                    type="submit"
                    className="CartModal__buttons"
                    style={{ background: "rgb(36, 219, 219)" }}
                >
                    ADD TO CART
                </button>
                <Link
                    to={`/collections/trending/products/${quickShopData?.title
                        ?.toLowerCase()
                        .replace(" ", "-")}`}
                >
                    <div className="QuickShopModal__link">
                        View full details
                    </div>
                </Link>
            </div>
        </form>
    );
};

export default QuickShopModal;
