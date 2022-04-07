const PageFooter = () => {
    const footerList = {
        categories: ["men", "women", "accessories", "shoes", "denim", "dress"],
        information: [
            "about us",
            "contact us",
            "term & conditions",
            "returns & exchanges",
            "shipping & delivery",
            "privacy & policy",
            "open shopify store",
        ],
        usefullinks: [
            "store location",
            "latest news",
            "my account",
            "my account",
            "size guide",
            "faqs 2",
            "faq",
        ],
    };
    return (
        <div className="PageFooter">
            <div className="PageFooter__top">
                <div className="Page__footer--information"></div>
                <div className="Page__footer--categories Page__footer--cols"></div>
                <div className="Page__footer--navigation Page__footer--cols"></div>
                <div className="Page__footer--signup Page__footer--cols"></div>
            </div>
            <div className="PageFooter__bottom"></div>
        </div>
    );
};

export default PageFooter;
