import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRef } from "react";

const DetaiPageLeft = ({
    imageList,
    transAmount,
    setTransAmount,
    displayedImage,
    setDisplayedImage,
}) => {
    const galleryRef = useRef();
    let itemHeight = galleryRef?.current?.clientHeight / imageList.length;
    let totalItems = galleryRef?.current?.clientHeight / itemHeight;

    return (
        <div className="DetailPage__product--showcase">
            <div className="DetailPage__imageGallery" ref={galleryRef}>
                <div
                    className="DetailPage__inner"
                    style={{
                        transform: `translateY(${transAmount}px)`,
                    }}
                >
                    {imageList?.map((item, index) => {
                        return (
                            <div
                                className="imageGallery__items"
                                key={index}
                                onClick={() => setDisplayedImage(index)}
                            >
                                <img
                                    className="imageGallery__images"
                                    src={item}
                                    style={{
                                        opacity:
                                            index === displayedImage ? 1 : 0.4,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="imageGallery__button--container">
                    <button
                        className="imageGallery__button"
                        onClick={() => {
                            if (
                                transAmount <
                                galleryRef?.current?.clientHeight -
                                    totalItems * itemHeight
                            ) {
                                setTransAmount((state) => state + itemHeight);
                            }
                        }}
                    >
                        <KeyboardArrowUpIcon />
                    </button>
                    <button
                        className="imageGallery__button"
                        onClick={() => {
                            if (
                                transAmount >
                                -galleryRef?.current?.clientHeight +
                                    (totalItems - 1) * itemHeight
                            ) {
                                setTransAmount((state) => state - itemHeight);
                            }
                        }}
                    >
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
            </div>

            <img
                className="DetailPage__image--displayed"
                src={imageList[displayedImage]}
            />
        </div>
    );
};

export default DetaiPageLeft;
