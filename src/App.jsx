import "./app.css"
import Carousels from "./components/Carousel/Carousels";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import SubHeader from "./components/Sub_header/SubHeader";

function App() {
  return (
    <>
      <div className="header_position">
        <Header />
        <SubHeader />
      </div>
      <Carousels />
      <Category />
      <Product />
    </>
  );
}

export default App;
