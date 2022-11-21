import React, { FC, Fragment } from "react";
import QuoteItem from "../QuoteItem/QuoteItem";
import styles from "./QuoteList.module.css";

interface QuoteListProps {
    quotes: [{ id: string; author: string; text: string }];
}

const QuoteList: FC<QuoteListProps> = (props) => {
    return (
        <Fragment>
            <ul className={styles.list}>
                {props.quotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
