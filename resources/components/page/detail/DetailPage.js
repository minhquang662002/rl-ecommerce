import "./DetailPage.css";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { NavContext } from "../../context/NavContext";
import _ from "lodash";
import DetailPageRight from "./DetailPageRight";
import DetaiPageLeft from "./DetaiPageLeft";
import findCurrentColor from "../../../utils/repeatFuction";
import { Link } from "react-router-dom";

const DetailPage = () => {
    const { setNavChoices } = useContext(NavContext);

    const tempItem = {
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
    };

    const { section, product } = useParams();

    const imageList = tempItem?.color?.map((item) => item.images).flat();
    const [displayedImage, setDisplayedImage] = useState(0);
    const [transAmount, setTransAmount] = useState(0);
    const [currentColor, setCurrentColor] = useState();

    useEffect(() => {
        setNavChoices((state) => !state);
        setCurrentColor(findCurrentColor(displayedImage, tempItem, imageList));
    }, [displayedImage]);

    return (
        <div className="DetailPage">
            <div className="DetailPage__location">
                <p>
                    <Link to="/">
                        <span>Home</span>
                    </Link>{" "}
                    {section && (
                        <>
                            &gt;
                            <Link to={`/collections/${section}`}>
                                <span>
                                    {" "}
                                    {_.startCase(
                                        _.toLower(section.replace("-", " "))
                                    )}{" "}
                                </span>
                            </Link>
                        </>
                    )}
                    {product && (
                        <>
                            &gt;
                            <span>
                                {" "}
                                {_.startCase(
                                    _.toLower(product.replace("-", " "))
                                )}{" "}
                            </span>
                        </>
                    )}
                </p>
            </div>
            <div className="DetailPage__product">
                <DetaiPageLeft
                    imageList={imageList}
                    transAmount={transAmount}
                    setTransAmount={setTransAmount}
                    displayedImage={displayedImage}
                    setDisplayedImage={setDisplayedImage}
                />
                <DetailPageRight
                    tempItem={tempItem}
                    currentColor={currentColor}
                    imageList={imageList}
                    setDisplayedImage={setDisplayedImage}
                />
            </div>
        </div>
    );
};

export default DetailPage;
