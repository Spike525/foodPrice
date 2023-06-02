import React, { useState } from "react";

import styles from "./QtySelector.module.scss";

const QtySelector = () => {
  const [count, setCount] = useState(1);

  const minusHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusHandler = () => {
    setCount(count + 1);
  };

  const changeHandler = (value: string) => {
    !!value && setCount(Number(value));
  };

  return (
    <span className={styles.container}>
      <button onClick={() => minusHandler()} className={styles.button}>
        -
      </button>
      <input
        type="number"
        value={count}
        className={styles.input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          changeHandler(event.target.value);
        }}
      />
      <button onClick={() => plusHandler()} className={styles.button}>
        +
      </button>
    </span>
  );
};

export default QtySelector;
