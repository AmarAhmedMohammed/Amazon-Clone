import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrenctFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Pages/Utility/action.type";

function Product() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/data.json") // Updated to API
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const [state, dispatch] = useContext(DataContext);

  return (
    <div className="product-section">
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="rating-container">
                <Rating value={product.rating.rate} precision={0.1} readOnly />
                <small>{product.rating.count} reviews</small>
              </div>
              <p className="price">
                <CurrencyFormat amount={product.price} />
              </p>
            </Link>
            <button
              className="add-to-cart"
              onClick={() => {
                console.log(product)
                dispatch({
                  type: Type.ADD_TO_BASKET,
                  item: {
                    product
                  }
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
