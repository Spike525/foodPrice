import React from "react";

import ItemCart from "./components/ItemCart/ItemCart.tsx";
import { getProductData } from "./fetchProducts.ts";

const productData = await getProductData();

const App = () => {
  return (
    <div className="App">
      <ItemCart prices={productData} />
    </div>
  );
};

export default App;
