import React, { FC } from "react";
import styles from "./HighlightedQuote.module.css";

interface HighlightedQuoteProps {
    text: string;
    author: string;
}

const HighlightedQuote: FC<HighlightedQuoteProps> = (props) => {
    return (
        <figure className={styles.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    );
};

export default HighlightedQuote;
