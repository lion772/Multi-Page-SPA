import React, { FC, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
    children: ReactNode | undefined;
}

const Card: FC<CardProps> = ({ children }) => {
    return <div className={styles.card}>{children}</div>;
};

export default Card;
