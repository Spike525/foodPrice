import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProductItem, { IProduct } from "../ProductItem/ProductItem.tsx";

interface ItemCartProps {
  prices: IProduct[];
}

const ItemCart: React.FC<ItemCartProps> = ({ prices }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12}>
          {prices.map((p) => {
            return <ProductItem product={p} key={p.id} />;
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemCart;
