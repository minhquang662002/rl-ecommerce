import Product from "./Product";
import "./MainPageSection.css";
import { useState } from "react";
const MainPageSection = ({ section }) => {
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
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
            description:
                "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse...",
            size: ["S", "M", "L"],
            categories: [
                "All",
                "Best seller",
                "Bottom",
                "Dress",
                "New Arrival",
                "Women",
            ],
        },
    ];
    const [max, setMax] = useState(8);
    return (
        <div className="MainPageSection">
            <p className="MainPageSection__title">{section}</p>
            <div className="MainPageSection__body">
                {tempItems?.slice(0, max).map((item, index) => {
                    return (
                        <Product key={index} item={item} section={section} />
                    );
                })}
            </div>
            {max < 16 && (
                <div
                    className="MainPageSection__loadmore--button"
                    onClick={() => setMax((state) => state + 8)}
                >
                    Load More
                </div>
            )}
        </div>
    );
};

export default MainPageSection;
