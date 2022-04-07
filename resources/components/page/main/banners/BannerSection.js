import "./BannerSection.css";

const BannerSection = () => {
    const temp = [
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1648050426/e-commerce/nowj5jcfk5epokz7y3a5.webp",
            title: "LOOKBOOK 2021",
            subtitle: "MAKE LOVE THIS LOOK",
        },
        {
            image: "https://res.cloudinary.com/dt7azkk7b/image/upload/v1648050429/e-commerce/ymthhyanf5ilvgld4smh.webp",
            title: "SUMMER SALE",
            subtitle: "UP TO 70%",
        },
    ];

    return (
        <div className="BannerSection">
            {temp.map((item, index) => (
                <div className="banner__wrapper" key={index}>
                    <div
                        className="banner"
                        key={index}
                        style={{ backgroundImage: `url(${item?.image})` }}
                    ></div>
                    <div className="banner__content">
                        <p className={`title${index + 1}`}>{item.title}</p>
                        <p className={`subtitle${index + 1}`}>
                            {item?.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BannerSection;
