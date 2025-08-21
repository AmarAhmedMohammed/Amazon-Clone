import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";
import React, { useContext } from "react";
import "./cartDescription.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../Utility/action.type";

function CartDescription({ products }) {
  let cartProduct = products.product;
    // console.log(products)
  
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const increment = (item) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <div className="cart-detail">
      <div className="product-container">
        <div className="cart-product-card">
          <img src={cartProduct.image} alt={cartProduct.title} />
          <div className="cart-txt">
            <h3>{cartProduct.title}</h3>
            <br />
            <h2>{cartProduct.description}</h2>
            <div className="cart-rating-container">
              <Rating
                value={cartProduct.rating.rate}
                precision={0.1}
                readOnly
              />
              <small>{cartProduct.rating.count} reviews</small>
            </div>
            <p className="cart-price">
              <CurrencyFormat amount={cartProduct.price} />
            </p>
            <div className="adding-button">
              <button onClick={() => decrement(item.id)}>➖</button>
              <h3>{cartProduct.amount} 1</h3>
              <button onClick={() => increment(item)}>➕</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDescription;
