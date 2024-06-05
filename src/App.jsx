import "./App.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


import HeaderNavBar from "./Component/HeaderNavBar";
import CarouselComponent from "./Component/CarouselComponent";
import ProductsComponent from "./Component/ProductsComponent";

function App() {
  return (
    <>
      <div>
        <HeaderNavBar />
        <CarouselComponent />
        <ProductsComponent />
      </div>
    </>
  );
}

export default App;
