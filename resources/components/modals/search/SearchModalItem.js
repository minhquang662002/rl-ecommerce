import "./SearchModalItem.css";

const SearchModalItem = ({ item }) => {
    const { title, price, color, size, imageindex } = item;
    return (
        <div className="SearchModalItem">
            <img className="SearchModalItem__image" src={imageindex} />

            <div className="SearchModalItem__info">
                <p className="SearchModalItem__title">{title}</p>
                <p className="SearchModalItem__price">${price}</p>
            </div>
        </div>
    );
};

export default SearchModalItem;
