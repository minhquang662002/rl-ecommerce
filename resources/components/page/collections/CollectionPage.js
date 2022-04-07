import "./CollectionPage.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Product from "../main/Product";
import { useParams } from "react-router";
import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";
const CollectionPage = () => {
    const [page, setPage] = useState(1);
    const [displayTable, setDisplayTable] = useState(false);
    const categories = [
        "Accessories",
        "Bottom",
        "Denim",
        "Dress",
        "Jackets",
        "Jewellry",
        "Men",
        "Shoes",
        "T-Shirt",
        "Tops",
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

    const { section } = useParams();

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="CollectionPage">
            <div className="CollectionPage__categories">
                {categories?.map((item, index) => {
                    return (
                        <span className="CollectionPage__category" key={index}>
                            {item}
                        </span>
                    );
                })}
            </div>
            <div className="CollectionPage__banner"></div>
            <div className="CollectionPage__mainContent">
                <div className="CollectionPage__mainContent--utils">
                    <div className="CollectionPage__filter">
                        <div
                            className="CollectionPage__filter--trigger"
                            onClick={() => setDisplayTable((state) => !state)}
                        >
                            <FilterAltIcon />
                            Filter
                        </div>
                    </div>
                    <form className="CollectionPage__sort">
                        <select>
                            <option value="">Featured</option>
                            <option value="">Best selling</option>
                            <option value="">Alphabetically, A-Z</option>
                            <option value="">Alphabetically, Z-A</option>
                            <option value="">Price, low to high</option>
                            <option value="">Price, high to low</option>
                            <option value="">Date, old to new</option>
                            <option value="">Date, new to old</option>
                        </select>
                    </form>
                </div>
                <div
                    className="CollectionPage__filter--table"
                    style={{
                        height: displayTable ? 500 : 0,
                        border: displayTable
                            ? "1px solid rgb(222, 219, 219)"
                            : "",
                    }}
                ></div>
                <div className="CollectionPage__mainContent--products">
                    {tempItems?.map((item, index) => {
                        return (
                            <Product
                                item={item}
                                key={index}
                                section={section}
                            />
                        );
                    })}
                </div>
                <div className="CollectionPage__mainContent--pagination">
                    <Pagination
                        count={10}
                        page={page}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
