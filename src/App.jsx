import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SharedLayout from "./Pages/sharedLayout/SharedLayout";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/Auth/SignUp";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import Four04 from "./Pages/404/Four04";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import CategoryDetail from "./Pages/categoryDetail/CategoryDetail";
import Product from "./components/Products/Product";
import Authentication from "./Pages/Auth/Authentication";
import { useEffect, useContext } from "react";
import { DataContext } from "./components/DataProvider/DataProvider";
import { onAuthStateChanged } from "firebase/auth";
import { Type } from "./Pages/Utility/action.type";
import { auth } from "./Pages/Utility/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/category/:category" element={<CategoryDetail />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
