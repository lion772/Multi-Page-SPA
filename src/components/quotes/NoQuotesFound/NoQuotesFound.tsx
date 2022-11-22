import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NoQuotesFound.module.css";

interface NoQuotesFoundProps {}

const NoQuotesFound: FC<NoQuotesFoundProps> = () => {
    return (
        <div className={styles.noquotes}>
            <p>No quotes found!</p>
            <Link className="btn" to={"/new-quote"}>
                Add a Quote
            </Link>
        </div>
    );
};

export default NoQuotesFound;
