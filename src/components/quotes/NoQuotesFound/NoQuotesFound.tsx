import React, { FC } from "react";
import styles from "./NoQuotesFound.module.css";

interface NoQuotesFoundProps {}

const NoQuotesFound: FC<NoQuotesFoundProps> = () => {
    return (
        <div className={styles.noquotes}>
            <p>No quotes found!</p>
            <a className="btn">Add a Quote</a>
        </div>
    );
};

export default NoQuotesFound;
