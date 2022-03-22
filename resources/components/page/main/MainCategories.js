import "./MainCategories.css";

const MainCategories = () => {
    let tempData = [
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1631954873/e-commerce/c_women_y1mjnh.webp",
            category: "Women",
        },
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1647181240/e-commerce/vqplb6cgxdy48vuv16qn.webp",
            category: "Accessories",
        },
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1647181149/e-commerce/wgqvzx5m5ycuysopst4s.webp",
            category: "Footwear",
        },
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1647181149/e-commerce/b2hf6ocka81nghybqlm2.webp",
            category: "Watches",
        },
    ];

    return (
        <div className="MainCategories">
            {tempData?.map((item, key) => {
                return (
                    <div
                        className={`MainCategories__items MainCategories__items--${
                            key + 1
                        }`}
                        key={key}
                    >
                        <img
                            className="MainCategories__item--images"
                            src={`${item?.image}`}
                        />
                        <div className="MainCategories__item--button">
                            {item?.category}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MainCategories;
