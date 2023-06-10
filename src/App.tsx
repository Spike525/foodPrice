import React from "react";
import ItemCart from "./components/ItemCart/ItemCart.tsx";
import { MARKETS } from "./market.helper.js";
import { fetchProductPrices } from "./fetchProducts.js";

const productDataRes = await fetch("mock/productDataMock.json");
const productDataMock = await productDataRes.json();
const productCatalogRes = await fetch("mock/productCatalogMock.json");
const productCatalogMock = await productCatalogRes.json()

const productData = await fetchProductPrices(productCatalogMock, MARKETS);

const App = () => {
  return (
    <div className="App">
      <ItemCart prices={productData} />
    </div>
  );
};

export default App;
