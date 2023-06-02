import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import SilpoLogo from "./assets/marketLogos/Silpo.svg";
import NovusLogo from "./assets/marketLogos/Novus.svg";
import MegamarketLogo from "./assets/marketLogos/Megamarket.svg";
import ForaLogo from "./assets/marketLogos/Fora.svg";
import ATBLogo from "./assets/marketLogos/ATB.svg";

export const MARKETS = {
  silpo: {
    baseUrl: "https://api.catalog.ecom.silpo.ua/api/2.0/exec/EcomCatalogGlobal",
    logo: SilpoLogo,
    name: "Сільпо",
    filialId: 3288,
  },
  fora: {
    baseUrl: "https://api.catalog.ecom.fora.ua/api/2.0/exec/EcomCatalogGlobal",
    name: "ФОРА",
    logo: ForaLogo,
    filialId: 310,
  },
  novus: {
    baseUrl: "https://novus.online/cms/stores/1031/search-popup?text=",
    logo: NovusLogo,
    name: "NOVUS",
  },
  atb: {
    baseUrl:
      "https://api.multisearch.io/?id=11280&lang=uk&location=1154&m=1685380491187&q=lvcr4i&s=large&uid=2234224b-10c2-4e50-89d1-88ac500a8643&query=",
    logo: ATBLogo,
    name: "АТБ",
  },
  megamarket: {
    baseUrl:
      "https://stores-api.zakaz.ua/stores/48267602/products/search/?per_page=10&q=",
    logo: MegamarketLogo,
    name: "MEGAMARKET",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
