import "./SearchModalItem.css";

const SearchModalItem = ({ item }) => {
    const { title, price, color, size } = item;
    return (
        <div className="SearchModalItem">
            <img className="SearchModalItem__image" src={color[0].images[0]} />

            <div className="SearchModalItem__info">
                <p className="SearchModalItem__title">{title}</p>
                <p className="SearchModalItem__price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default SearchModalItem;
