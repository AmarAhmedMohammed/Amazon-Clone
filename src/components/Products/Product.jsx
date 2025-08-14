import React, { useEffect, useState } from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrenctFormat/CurrencyFormat";

function Product() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-section">
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <a href="#" className="product-link">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="rating-container">
                <Rating value={product.rating.rate} precision={0.1} readOnly />
                <small>{product.rating.count} reviews</small>
              </div>
              <p className="price">
                <CurrencyFormat amount={product.price} />
              </p>
            </a>
            <button className="add-to-cart" onClick={() => setCount(count + 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
