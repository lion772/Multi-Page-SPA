import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./QuoteItem.module.css";

interface IQuoteItem {
    id: string;
    author: string;
    text: string;
}

const QuoteItem: FC<IQuoteItem> = ({ id, author, text }) => {
    return (
        <li className={styles.item}>
            <figure>
                <blockquote>
                    <p>{text}</p>
                </blockquote>
                <figcaption>{author}</figcaption>
            </figure>
            <Link className="btn" to={`/quotes/${id}`}>
                View Fullscreen
            </Link>
        </li>
    );
};

export default QuoteItem;
