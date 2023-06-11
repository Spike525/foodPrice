import axios from "axios";
import { fetchProductCatalog } from "./firebase";
import { MARKETS } from "./market.helper.js";

const processNOVUSdata = (data) => {
  const isAvailable = data.product.count;

  return {
    oldPrice: isAvailable
      ? data.product.items[0].priceData.regularPrice
        ? data.product.items[0].priceData.regularPrice
        : data.product.items[0].priceData.current
      : 0,
    currentPrice: isAvailable ? data.product.items[0].priceData.current : 0,
  };
};
const processATBdata = (data) => {
  const isAvailable = data.total;

  return {
    oldPrice: isAvailable
      ? data.results.item_groups[0].items[0][0].oldprice
        ? data.results.item_groups[0].items[0][0].oldprice
        : data.results.item_groups[0].items[0][0].price
      : 0,
    currentPrice: isAvailable
      ? data.results.item_groups[0].items[0][0].price
      : 0,
  };
};
const processMEGAMARKETdata = (data) => {
  const isAvailable = data.count;

  return {
    oldPrice: isAvailable
      ? data.results[0].discount.old_price
        ? data.results[0].discount.old_price / 100
        : data.results[0].price / 100
      : 0,
    currentPrice: isAvailable ? data.results[0].price / 100 : 0,
  };
};
const processFOZZYdata = (data) => {
  const isAvailable = data.items.length;

  return {
    oldPrice: isAvailable
      ? data.items[0].oldPrice
        ? data.items[0].oldPrice
        : data.items[0].price
      : 0,
    currentPrice: isAvailable ? data.items[0].price : 0,
  };
};

const fetchFOZZYProductData = async (brand, productID, marketsData) => {
  const response = await axios.post(marketsData[brand].baseUrl, {
    method: "GetSimpleCatalogItems",
    data: {
      customFilter: productID,
      filialId: marketsData[brand].filialId,
    },
  });
  return response.data;
};

const fetchGeneral = async (brand, productID, marketsData) => {
  const market = marketsData[brand];
  const response = await axios.get(`${market.baseUrl}${productID}`);

  return response.data;
};

const processObj = {
  novus: processNOVUSdata,
  atb: processATBdata,
  megamarket: processMEGAMARKETdata,
  silpo: processFOZZYdata,
  fora: processFOZZYdata,
};

const fetchProductPrices = async (productArr, marketsData) => {
  const res = await Promise.all(
    productArr.map(async (product) => {
      const marketPrices = await Promise.all(
        product.marketIDs.map(async (market) => {
          let data;

          switch (market.name) {
            case "novus":
            case "atb":
            case "megamarket":
              data = await fetchGeneral(market.name, market.id, marketsData);
              break;
            case "silpo":
            case "fora":
              data = await fetchFOZZYProductData(
                market.name,
                market.id,
                marketsData
              );
              break;
            default:
              console.log("Sorry, can not find API for " + market.name + ".");
          }

          try {
            return {
              market: market.name,
              prices: processObj[market.name](data),
            };
          } catch (e) {
            console.log(market.name, "error data  ->", e);
          }
        })
      );

      return Object.assign(product, { prices: marketPrices });
    })
  );
  return res;
};

export const getProductData = async (useMockData?, useMockCatalog?) => {
  if (useMockData) {
    const productDataRes = await fetch("mock/productDataMock.json");
    const productDataMock = await productDataRes.json();
    return productDataMock;
  } else if (useMockCatalog) {
    const productCatalogRes = await fetch("mock/productCatalogMock.json");
    const productCatalogMock = await productCatalogRes.json();

    const productData = await fetchProductPrices(productCatalogMock, MARKETS);
    return productData;
  } else {
    const productCatalog = await fetchProductCatalog();
    const productData = await fetchProductPrices(productCatalog, MARKETS);

    return productData;
  }
};
