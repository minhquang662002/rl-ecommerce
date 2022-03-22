import "./SearchModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import SearchModalItem from "./SearchModalItem";

const SearchModal = () => {
    const { setNavChoices, navChoices } = useContext(NavContext);
    const temp = [
        "All Categories",
        "Accessories",
        "Bag",
        "Camera",
        "Decor",
        "Earphones",
        "Electric",
        "Furniture",
        "Headphone",
        "Men",
        "Shoes",
        "Speaker",
        "Watch",
        "Women",
    ];
    const tempItems = [
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
        {
            title: "Blush Beanie",
            price: 15,
            color: [
                {
                    type: "gray",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q3_2-0_900x_wmsger.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/acndb3127517966_q1_2-0_900x_hkyv6z.webp",
                    ],
                },
                {
                    type: "black",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q2_2-0_900x_k6ivfb.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/ragbo452081071c_q1_2-0_900x_irqzhz.webp",
                    ],
                },
                {
                    type: "pink",
                    images: [
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559052/e-commerce/products/p3/pr1-pink_15a53f8c-d765-48c4-8376-0383ff737716_900x_pfgzw4.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-3_900x_tu73b2.webp",
                        "https://res.cloudinary.com/dt7azkk7b/image/upload/v1632559053/e-commerce/products/p3/pr1-pink-2_900x_ly2kkr.webp",
                    ],
                },
            ],
            size: ["S", "M", "L"],
        },
    ];

    return (
        <div
            className="SearchModal"
            style={{
                transform: navChoices.search
                    ? "translateX(0)"
                    : "translateX(100%)",
            }}
        >
            <div className="SearchModal__header NavModal__header">
                <p>SEARCH OUR SITE</p>
                <span
                    className="NavModal__close--button"
                    onClick={() =>
                        setNavChoices((state) => ({ ...state, search: false }))
                    }
                >
                    <CloseIcon />
                </span>
            </div>
            <div className="SearchModal__body">
                <form className="SearchModal__body--form">
                    <select className="SearchModal__body--categories SearchModal__input">
                        {temp.map((item, key) => (
                            <option key={key}>{item}</option>
                        ))}
                    </select>
                    <input className="SearchModal__body--search SearchModal__input" />
                </form>
                <div className="SearchModal__body--suggest">
                    Need some inspiration?
                </div>
            </div>
            <div className="SearchModal__footer">
                {tempItems.map((item, key) => (
                    <SearchModalItem item={item} key={key} />
                ))}
                <div className="SearchModal__footer--view">View All</div>
            </div>
        </div>
    );
};

export default SearchModal;
