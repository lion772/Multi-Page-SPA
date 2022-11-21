import React, { FC } from "react";
import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {}

const LoadingSpinner: FC<LoadingSpinnerProps> = () => {
    return <div className={styles.spinner}></div>;
};

export default LoadingSpinner;
