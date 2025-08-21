import React, { useContext } from "react";
import "./cart.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import CartDescription from "./CartDescription";
import CurrencyFormat from "../../components/CurrenctFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  let total = 0;
  for (let i = 0; i < basket.length; i++) {
    total = total + basket[i].product.price;
  }

  return (
    <div>
      <section>
        <div>
          <h2 style={{ color: "#232f3e" }}>Hello</h2>
          <br />
          <h3 style={{ color: "#232f3e" }}>You Shopping Basket</h3>
          <br />
          <hr />
          {basket?.length == 0 ? (
            <h2
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#232f3e",
                fontSize: "30px",
              }}
            >
              Opps! No item in your cart
            </h2>
          ) : (
            basket?.map((product, i) => {
              // console.log(product)
              
              return <CartDescription key={i} products={product} />;
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className="subtotal_container">
            <div className="subtotal-txt">
              <h3>Subtotal ({basket?.length} items)</h3>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small> This order contains a gift</small>
            </span>
            <Link to={"/payment"} className="checkout-link">
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
