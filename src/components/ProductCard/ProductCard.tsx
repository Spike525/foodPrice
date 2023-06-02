import React from "react";

import styles from "./productCard.module.scss";

interface IProductCard {
  image: string;
  productName: string;
}

const ProductCard: React.FC<IProductCard> = ({ image, productName }) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={`${productName} image`}
        loading="lazy"
        className={styles.img}
      />
      <div className={styles.information}>
        <span className={styles.title}>{productName}</span>
      </div>
    </div>
  );
};

export default ProductCard;
