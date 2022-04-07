import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import findCurrentColor from "../../../utils/repeatFuction";

const QuickViewModalRight = ({
    setNavChoices,
    quickViewData,
    imageList,
    displayedSize,
    setDiplayedSize,
    setDisplayedImage,
    displayedImage,
}) => {
    const [currentColor, setCurrentColor] = useState();

    useEffect(() => {
        if (displayedImage !== undefined) {
            setCurrentColor(
                findCurrentColor(displayedImage, quickViewData, imageList)
            );
        }
    }, [displayedImage]);

    return (
        <div className="QuickViewModal__info--holder">
            <div style={{ textAlign: "right" }}>
                <CloseIcon
                    className="NavModal__close--button"
                    onClick={() => setNavChoices((state) => ({ ...!state }))}
                />
            </div>
            <h1 className="QuickViewModal__title">{quickViewData?.title}</h1>
            <div className="QuickViewModal__priceRating">
                <p className="QuickViewModal__price">
                    ${quickViewData?.price?.toFixed(2)}
                </p>
            </div>
            <p className="QuickViewModal__description">
                {quickViewData?.description}
            </p>
            <div className="QuickViewModal__color--container">
                <p>COLOR: {quickViewData?.color?.[currentColor]?.type}</p>
                <div className="QuickViewModal__color--holder">
                    {quickViewData?.color?.map((item, index) => {
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
            </div>
            <div className="QuickViewModal__size--container">
                <p>SIZE: {quickViewData?.size?.[displayedSize]}</p>
                <div className="QuickViewModal__size--holder">
                    {quickViewData?.size?.map((item, index) => {
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
                                onClick={() => setDiplayedSize(index)}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default QuickViewModalRight;
