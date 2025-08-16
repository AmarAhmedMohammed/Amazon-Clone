import React from "react";
import "./category.css";
import { categoryInfo } from "./categoryInfo";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="category-section">
      <section className="category-container">
        {categoryInfo.map((info, index) => (
          <Link to={`/category/${info.category}`} className="category-link" key={index}>
            <div className="category-card">
              <h2>{info.category}</h2>
              <img src={info.image} alt={info.title} />
              <h4>Shop Now</h4>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Category;