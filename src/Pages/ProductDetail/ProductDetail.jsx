import React, { useEffect, useState } from "react";
import "./productDetail.css";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";

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
    return <div>Loading...</div>;
  }

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
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;