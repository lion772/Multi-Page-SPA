import React, { FC } from "react";
import { Quote } from "../QuoteForm/QuoteForm";
import styles from "./QuoteItem.module.css";

interface IQuoteItem {
    id: string;
    author: string;
    text: string;
}

const QuoteItem: FC<IQuoteItem> = (props) => {
    return (
        <li className={styles.item}>
            <figure>
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <a className="btn">View Fullscreen</a>
        </li>
    );
};

export default QuoteItem;
