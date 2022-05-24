import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import findCurrentColor from "../../../utils/repeatFuction";

const QuickViewModalRight = ({
    setNavChoices,
    allImages,
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
                findCurrentColor(displayedImage, allImages, imageList)
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
            <h1 className="QuickViewModal__title">{allImages?.title}</h1>
            <div className="QuickViewModal__priceRating">
                <p className="QuickViewModal__price">
                    ${allImages?.price?.toFixed(2)}
                </p>
            </div>
            <p className="QuickViewModal__description">
                {allImages?.description}
            </p>
            <div className="QuickViewModal__color--container">
                <p>COLOR: {allImages?.color?.[currentColor]?.type}</p>
                <div className="QuickViewModal__color--holder">
                    {allImages?.color?.map((item, index) => {
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
                <p>SIZE: {allImages?.size?.[displayedSize]}</p>
                <div className="QuickViewModal__size--holder">
                    {allImages?.size?.map((item, index) => {
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
