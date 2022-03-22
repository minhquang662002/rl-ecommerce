import "./Carousel.css";
import { useState, useRef } from "react";
import useCarousel from "../../utils/useCarousel";
const Carousel = () => {
    const [activePage, setActivePage] = useState(0);
    const carouselRef = useRef(null);
    const dumpData = [
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1631463987/e-commerce/u72n44vtqqkmorysawzj.webp",
            season: "SUMMER 2022",
            title: "New Arrival Collection",
        },
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1631463998/e-commerce/v4b7tlprmub22ynjzz8l.webp",
            season: "NEW SEASON",
            title: "Lookbook Collection",
        },
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1631464008/e-commerce/igk8mmmso2haifyy1jfp.webp",
            season: "SUMMER SALE",
            title: "Save up to 70%",
        },
    ];

    let grabbing = useCarousel(carouselRef, activePage, setActivePage);

    return (
        <div
            className="Carousel"
            ref={carouselRef}
            style={{ cursor: grabbing ? "grabbing" : "grab" }}
        >
            {dumpData.map((item, index) => {
                return (
                    <div
                        className="Sliders"
                        key={index}
                        style={{
                            backgroundImage: `url(${item?.image})`,
                            opacity: activePage === index ? 1 : 0,
                            visibility:
                                activePage === index ? "visible" : "hidden",
                        }}
                    >
                        <div
                            className={`slider__description slider__description${
                                index + 1
                            }`}
                        >
                            <p className="slider__description--season">
                                {item?.season}
                            </p>
                            <p className="slider__description--title">
                                {item?.title}
                            </p>
                            <div className="slider__description--button">
                                Explore now
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="slider-dots">
                {dumpData.map((item, index) => {
                    return (
                        <div
                            className="dot"
                            key={index}
                            style={{
                                background:
                                    index === activePage
                                        ? "black"
                                        : "rgb(131, 129, 129)",
                            }}
                            onClick={() => setActivePage(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
