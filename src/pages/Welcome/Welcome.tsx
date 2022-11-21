import React, { FC } from "react";
import styles from "./Welcome.module.css";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => (
    <h1 className={styles.Welcome}>Welcome Page</h1>
);

export default Welcome;
