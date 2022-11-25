import React, { FC } from "react";
import { Link, useRouteError } from "react-router-dom";
import styles from "./NoQuotesFound.module.css";

interface NoQuotesFoundProps {}

const NoQuotesFound: FC<NoQuotesFoundProps> = () => {
    const error = useRouteError();
    return (
        <div className={styles.noquotes}>
            <p> No quotes found. An error occurred while loading the page</p>
            <p>{(error as Error).message}</p>
            <Link className="btn" to={"/new-quote"}>
                Add a Quote
            </Link>
        </div>
    );
};

export default NoQuotesFound;
