import useCarousel from "../../../utils/useCarousel";
import { useRef } from "react";

const QuickViewModalLeft = ({
    allImages,
    displayedImage,
    setDisplayedImage,
    imageList,
}) => {
    const quickViewRef = useRef();
    let grabbing = useCarousel(
        quickViewRef,
        displayedImage,
        setDisplayedImage,
        imageList?.length
    );
    let current = -1;
    return (
        <div
            className="QuickViewModal__image--holder"
            ref={quickViewRef}
            style={{ cursor: grabbing ? "grabbing" : "grab" }}
        >
            <div
                className="QuickViewModal__image"
                style={{
                    backgroundImage: `url(${imageList[displayedImage]})`,
                }}
            />
            <div className="QuickViewModal__dot--holder">
                {allImages?.map((item, index) => {
                    current++;
                    let pos = current;
                    return (
                        <div
                            className="dot quickview__dot"
                            key={index}
                            style={{
                                background:
                                    pos === displayedImage ? "black" : "",
                            }}
                            onClick={() => {
                                setDisplayedImage(pos);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default QuickViewModalLeft;
