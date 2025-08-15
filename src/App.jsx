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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/electronics" element={<CategoryDetail categoryIn="electronics" />} />
          <Route path="/menClothing" element={<CategoryDetail categoryIn="menClothing" />} />
          <Route path="/jewelery" element={<CategoryDetail categoryIn="jewelery" />} />
          <Route path="/womenClothing" element={<CategoryDetail categoryIn="womenClothing" />} />
          <Route path="/products" element={<Product />} /> 
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;