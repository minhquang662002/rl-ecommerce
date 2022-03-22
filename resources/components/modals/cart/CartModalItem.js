import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./CartModalItem.css";

const CartModalItem = ({ item }) => {
    const { title, price, color, size } = item;
    return (
        <div className="CartModal__items">
            <img className="CartModal__item--images" src={color[0].images[0]} />
            <div>
                <div className="CartModal__item--info">
                    <p className="CartModal__item--title">{title}</p>
                    <p className="CartModal__item--type">
                        {color[0].type} / {size[0]}
                    </p>
                    <p className="CartModal__item--price">
                        ${price.toFixed(2)}
                    </p>
                </div>
                <form className="CartModal__item--modify">
                    <div className="CartModal__quanity">
                        <span className="CartModal__quanity--decrease">-</span>
                        <input type="number" min={1} max={99} />
                        <span className="CartModal__quanity--increase">+</span>
                    </div>
                    <div className="CartModal__modifier">
                        <EditOutlinedIcon />
                        <DeleteOutlineOutlinedIcon />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CartModalItem;
