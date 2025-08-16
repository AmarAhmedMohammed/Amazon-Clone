import React, { useEffect, useState } from "react";
import "./categoryDetail.css";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";

function CategoryDetail() {
  const [categorys, setCategorys] = useState([]);
  const {category} = useParams();
  // console.log(useParams())
  // console.log(category)


  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const singelProduct = data.filter((singelProduct) => singelProduct.category === category)
        setCategorys(singelProduct);
      });
  }, [categorys]);

    console.log(categorys)
  return (
    <div className="category-detail">
      <header className="category-header">
        <h1>Results</h1>
        <hr />
        <h2>{`Category / ${categorys.category}`}</h2>
      </header>
      <div className="product-section">
        <div className="product-container">
          {categorys.map((product) => (
            <div className="product-card" key={product.id}>
              <a href="#" className="product-link">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">
                  <CurrencyFormat amount={product.price} />
                </p>
                <div className="rating-container">
                  <Rating
                    value={product.rating.rate}
                    precision={0.1}
                    readOnly
                  />
                  <small>{product.rating.count} reviews</small>
                </div>
              </a>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
