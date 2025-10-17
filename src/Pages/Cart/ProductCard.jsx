import React, { useContext } from "react";
import "./productCard.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import PaymentCardDescription from "./PaymentCardDescription";

function ProductCard() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total = total + basket[i].product.price;
  }

  return (
    <div>
      <section>
        <div className="productInfo">
          {basket?.map((product, i) => {
            return <PaymentCardDescription key={i} products={product} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
