import React from "react";

import styles from "./preloaderItem.module.scss";

const PreloaderItem = () => {
  return (
    <div className={styles.launch}>
      <div className={styles.launch__image}>
        <div className={styles.launch__inner_image} />
      </div>
      <div className={styles.launch__content}>
        <div className="flex aic">
          <div className={styles.launch__title} />
          <div className={styles.launch__status} />
        </div>
        <div className={styles.launch__date} />
        <div className={styles.launch__text} />
        <div className={styles.launch__text} />
      </div>
    </div>
  );
};

export default PreloaderItem;
