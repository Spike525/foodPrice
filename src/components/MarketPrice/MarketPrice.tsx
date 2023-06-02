import React from "react";

import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

import styles from "./MarketPrice.module.scss";
import QtySelector from "../QtySelector/QtySelector.tsx";

import { MARKETS } from "../../index";

export interface IMarketPrice {
  market: string;
  prices: IPrice;
}

interface IPrice {
  oldPrice: string | number;
  currentPrice: string | number;
}

const MarketPrice: React.FC<IMarketPrice> = ({ market, prices }) => {
  const isOnSale = prices.oldPrice > prices.currentPrice;

  const showQtySelector = false;

  return prices.currentPrice ? (
    <div
      className={`marketPrice ${styles.container} ${
        isOnSale ? styles.sale : ""
      }`}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} md={12}>
          <img
            src={MARKETS[market].logo}
            alt={`${market} logo`}
            className={styles.img}
          />
        </Grid>
        <Grid item xs={4} md={12}>
          {isOnSale && (
            <span className={`${styles.oldPrice} ${styles.price}`}>
              !!!SALE <s>{prices.oldPrice} грн.</s>
            </span>
          )}
          <span className={`${styles.newPrice} ${styles.price}`}>
            {prices.currentPrice} грн.
          </span>
        </Grid>
        {showQtySelector ? (
          <Grid
            item
            xs={4}
            md={12}
            sx={{
              display: "flex",
              alignItems: "center",
              alignSelf: "end",
              flexDirection: "column",
            }}
          >
            <QtySelector />
            <Button variant="contained">Додати</Button>
          </Grid>
        ) : null}
      </Grid>
    </div>
  ) : null;
};

export default MarketPrice;
