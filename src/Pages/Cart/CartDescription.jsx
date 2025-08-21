import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";
import React, { useContext, useReducer } from "react";
import "./cartDescription.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../Utility/action.type";

function CartDescription({ products }) {
  let cartProduct = products.product;    
  
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const remove = (ids) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: ids,
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
              <button onClick={() => remove(cartProduct.id)}>Remove From Basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDescription;
