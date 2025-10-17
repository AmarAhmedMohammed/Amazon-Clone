import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";
import React, { useContext, useReducer } from "react";
import "./pymentDescriptionCard.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../Utility/action.type";

function PaymentCardDescription({ products }) {
  let cartProduct = products.product;

  const [{ basket, user }, dispatch] = useContext(DataContext);

  const remove = (ids) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: ids,
    });
  };

  return (
    <div className="payment_card_description">
      <img src={cartProduct.image} alt={cartProduct.title} />
      <div className="cart-txt">
        <h3>{cartProduct.title}</h3>
        <br />
        <div className="cart-rating-container">
          <Rating value={cartProduct.rating.rate} precision={0.1} readOnly />
          <small>{cartProduct.rating.count} reviews</small>
        </div>
        <p className="cart-price">
          <CurrencyFormat amount={cartProduct.price} />
        </p>
      </div>
    </div>
  );
}

export default PaymentCardDescription;
