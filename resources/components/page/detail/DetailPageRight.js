import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";

const DetailPageRight = ({
    tempItem,
    currentColor,
    imageList,
    setDisplayedImage,
}) => {
    return (
        <div className="DetailPage__product--info">
            <h2 className="DetailPage__product--title">{tempItem?.title}</h2>
            <p className="DetailPage__product--price">
                ${tempItem?.price?.toFixed(2)}
            </p>
            <p className="DetailPage__product--description">
                {tempItem?.description}
            </p>
            <div className="QuickViewModal__color--container">
                <p>COLOR: {tempItem?.color?.[currentColor]?.type}</p>
                <div className="QuickViewModal__color--holder">
                    {tempItem?.color?.map((item, index) => {
                        return (
                            <div
                                className="QuickViewModal__color--outer"
                                key={index}
                                style={{
                                    borderColor:
                                        currentColor === index
                                            ? "black"
                                            : "rgb(196, 189, 189)",
                                }}
                                onClick={() => {
                                    setDisplayedImage(
                                        imageList.indexOf(item.images[0])
                                    );
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
                    <p>SIZE: {tempItem?.size?.[0]}</p>
                    <div className="QuickViewModal__size--holder">
                        {tempItem?.size?.map((item, index) => {
                            return (
                                <div
                                    className="QuickViewModal__size--button"
                                    key={index}
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
                        <span className="CartModal__quanity--decrease">-</span>
                        <input
                            type="number"
                            min={1}
                            max={99}
                            defaultValue={1}
                        />
                        <span className="CartModal__quanity--increase">+</span>
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
            </div>
        </div>
    );
};

export default DetailPageRight;
