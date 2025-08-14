import React, { useState } from "react";
import "boxicons";
import "./header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section className="header-out-section">
        <a href="#">
          <div className="amazon-logo-container">
            <img src="amazon-text-logo.png" alt="" />
          </div>
        </a>
        <a href="#" className="location-container link">
          <div className="location-icon-container">
            <box-icon name="map" type="solid" color="#ffffff"></box-icon>
          </div>
          <div>
            <p>Deliver To</p>
            <h3>Ethiopia</h3>
          </div>
        </a>
        <div className="input-container">
          <div className="select-container">
            <select name="" id="">
              <option value="all" className="center">All</option>
              <option value="arts-crafts">Arts & Crafts</option>
              <option value="automotive">Automotive</option>
              <option value="baby">Baby</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="books">Books</option>
              <option value="boys-fashion">Boys' Fashion</option>
              <option value="computers">Computers</option>
              <option value="deals">Deals</option>
              <option value="digital-music">Digital Music</option>
              <option value="electronics">Electronics</option>
              <option value="girls-fashion">Girls' Fashion</option>
              <option value="health-household">Health & Household</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="industrial-scientific">Industrial & Scientific</option>
              <option value="kindle-store">Kindle Store</option>
              <option value="luggage">Luggage</option>
              <option value="mens-fashion">Men's Fashion</option>
              <option value="movies-tv">Movies & TV</option>
              <option value="music-cds-vinyl">Music, CDs & Vinyl</option>
            </select>
          </div>
          <div className="input-containers">
            <input type="text" placeholder="Search Amazon" />
          </div>
          <div className="search-icon-container">
            <box-icon name="search"></box-icon>
          </div>
        </div>
        <div className="america-flag-container link">
          <div className="america-flag">
            <img src="america-flag.png" alt="America-flag" />
          </div>
          <div className="language-select">
            <select name="" id="language">
              <option value="">EN</option>
              <option value="en">English - EN</option>
              <option value="es">español - ES</option>
              <option value="ar">عربي - AR</option>
              <option value="de">Deutsch - DE</option>
              <option value="he">עברית - HE</option>
              <option value="ko">한국어 - KO</option>
              <option value="pt">português - PT</option>
              <option value="zh-Hans">中文 (简体) - ZH</option>
              <option value="zh-Hant">中文 (繁體) - ZH</option>
            </select>
          </div>
        </div>
        <a href="#" className="link account-link">
          <div>
            <p>Hello, sign in</p>
            <h3>Account & Lists</h3>
          </div>
        </a>
        <a href="#" className="link returns-link">
          <div>
            <p>Returns</p>
            <h3>& Orders</h3>
          </div>
        </a>
        <a href="#" className="link cart-link">
          <div className="cart-icon-container">
            <img
              src="cart-logo.png"
              alt=""
              onClick={() => setCount(count + 1)}
            />
            <div className="cart-count">
              <h1>{count}</h1>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Header;