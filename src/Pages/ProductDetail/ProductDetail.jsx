import React, { useContext, useEffect, useState } from "react";
import "./productDetail.css";
// import "./pdtail.css";
// import class from "./"
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";
import Loader from "../Loader/Loader";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../Utility/action.type";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const singleProductDetail = data.find(
          (single) => single.id === Number(productId)
        );
        setProduct(singleProductDetail);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <Loader />;
  }
  const [state, dispatch] = useContext(DataContext);

  return (
    <div className="product-section">
      <div className="product-container">
        <div className="product-card" key={product.id}>
          <div className="product-link">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{product.description}</h4>
            <div className="rating-container">
              <Rating value={product.rating.rate} precision={0.1} readOnly />
              <small>{product.rating.count} reviews</small>
            </div>
            <p className="price">
              <CurrencyFormat amount={product.price} />
            </p>
          </div>
          <button
            className="add-to-cart"
            onClick={() => {
              console.log(product);
              dispatch({
                type: Type.ADD_TO_BASKET,
                item: {
                  product,
                },
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
