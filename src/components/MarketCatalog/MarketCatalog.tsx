import React from "react";

import styles from "./MarketCatalog.module.scss";
import MarketPrice, { IMarketPrice } from "../MarketPrice/MarketPrice.tsx";

export interface IMarketCatalog {
  markets: IMarketPrice[];
}

const MarketCatalog: React.FC<IMarketCatalog> = ({ markets }) => {
  const marketsItems = markets.map((m) => MarketPrice(m));
  return <div className={`${styles.container}`}>{marketsItems}</div>;
};

export default MarketCatalog;
