import React from "react";
import ItemCart from "./components/ItemCart/ItemCart.tsx";

const productDataRes = await fetch("mock/productDataMock.json");
const productData = await productDataRes.json();

const App = () => {
  return (
    <div className="App">
      <ItemCart prices={productData} />
    </div>
  );
};

export default App;
