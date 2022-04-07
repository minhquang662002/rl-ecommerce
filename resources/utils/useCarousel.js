import { useEffect, useState, useRef } from "react";
function useCarousel(element, displayedIndex, setDisplay, length) {
    const [grabbing, setGrabbing] = useState(false);
    let startPos = useRef(null);
    let endPos = useRef(null);
    window.oncontextmenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    useEffect(() => {
        const mainCarousel = element?.current;
        const touchStart = (e) => {
            startPos.current = e.type.includes("mouse")
                ? e.pageX
                : e.touches[0].clientX;
            setGrabbing(true);
            endPos.current = null;
        };

        const touchEnd = (e) => {
            setGrabbing(false);
            endPos.current = e.type.includes("mouse")
                ? e.pageX
                : e.changedTouches[0].clientX;
        };

        const swipeSlider = () => {
            mainCarousel.addEventListener("touchstart", touchStart);
            mainCarousel.addEventListener("touchend", touchEnd);
            mainCarousel.addEventListener("dragstart", (e) =>
                e.preventDefault()
            );
            mainCarousel.addEventListener("mousedown", touchStart);
            mainCarousel.addEventListener("mouseup", touchEnd);
            mainCarousel.addEventListener("mouseleave", touchEnd);
            if (startPos.current !== null && endPos.current !== null) {
                if (endPos.current - startPos.current < -100) {
                    if (displayedIndex < length - 1) {
                        setDisplay((state) => state + 1);
                    } else {
                        setDisplay(0);
                    }
                }
                if (endPos.current - startPos.current > 100) {
                    if (displayedIndex > 0) {
                        setDisplay((state) => state - 1);
                    } else {
                        setDisplay(length - 1);
                    }
                }
            }
        };

        if (mainCarousel) {
            swipeSlider();
        }
    }, [grabbing]);

    return grabbing;
}

export default useCarousel;
