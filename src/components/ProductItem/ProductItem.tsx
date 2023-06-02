import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ProductCard from "../ProductCard/ProductCard.tsx";
import MarketCatalog from "../MarketCatalog/MarketCatalog.tsx";
import { IMarketPrice } from "../MarketPrice/MarketPrice.tsx";

interface IMarketID {
  name: string;
  id: string;
}

export interface IProduct {
  name: string;
  id: string;
  image: string;
  marketIDs: IMarketID[];
  prices: IMarketPrice[];
}

interface IProductItem {
  product: IProduct;
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: "20px",
}));

const ProductItem: React.FC<IProductItem> = ({ product }) => {
  const { image, name, prices } = product;
  return (
    <Item>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ProductCard image={image} productName={name} />
        </Grid>
        <Grid item xs={12} md={8}>
          <MarketCatalog markets={prices} />
        </Grid>
      </Grid>
    </Item>
  );
};

export default ProductItem;
