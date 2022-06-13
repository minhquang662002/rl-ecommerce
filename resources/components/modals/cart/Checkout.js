import React from 'react'
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { Link } from 'react-router-dom'

const Checkout = (props) => {
  return (
    <div className="CartModal__footer">
        <div className="CartModal__footer--sale">
            <div className="sale__amount">
                <LocalOfferIcon />
                <span style={{ fontWeight: "bolder" }}>
                    5% OFF(-${((parseFloat(props.price)) * 0.05 * parseInt(props.qty)).toFixed(2)})
                    
                </span>
            </div>
        </div>
        <div className="CartModal__footer--calculation">
            <p style={{ fontWeight: "bolder" }}>Subtotal:</p>
            <div style={{ textAlign: "right" }}>
                <p>${parseFloat(props.price) * parseInt(props.qty)} - ${((parseFloat(props.price)) * 0.05 * parseFloat(props.qty)).toFixed(2)}</p>
                <p style={{ fontWeight: "bolder" }}>${((parseFloat(props.price)) * parseInt(props.qty) - ((parseFloat(props.price)) * 0.05 * parseInt(props.qty))).toFixed(2)}</p>
            </div>
        </div>
        <div className="CartModal__button--container">
            <Link to={`/collections/order/products/${props.title.toString().toLowerCase().replaceAll(" ", "-")}`} state={{id_product: props.id_product}} style={{textDecoration: "none"}}>
                <div className="CartModal__cart--button CartModal__buttons">
                    View more product
                </div>
            </Link>
            <Link to={`/collections/order/products/${props.title.toString().toLowerCase().replaceAll(" ", "-")}`} state={{id_product: props.id_product, standout: 1}} style={{textDecoration: "none"}}>
                <div className="CartModal__checkout--button CartModal__buttons">
                    Check out
                </div>
            </Link>
            <img
                style={{
                    objectFit: "contain",
                    width: "100%",
                    marginTop: "20px",
                }}
                src="https://res.cloudinary.com/dt7azkk7b/image/upload/v1635006729/e-commerce/auth_ozrwel.png"
            />
        </div>
    </div>
  )
}

export default Checkout