import React, { FC, Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "../QuoteItem/QuoteItem";
import styles from "./QuoteList.module.css";

const sortQuotes = (quotes: Quotes, ascending: boolean) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

export type Quotes = { id: string; author: string; text: string }[];

interface QuoteListProps {
    quotes: { id: string; author: string; text: string }[];
}

const QuoteList: FC<QuoteListProps> = ({ quotes }) => {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let isSortingAscending = queryParams.get("sort") === "asc";

    const sortedQuotes = sortQuotes(quotes, isSortingAscending);

    const changeSortHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
        });
        /* history.push(
            `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
        ); */
    };

    return (
        <Fragment>
            <div className={styles.sorting}>
                <button onClick={changeSortHandler}>
                    Sort {isSortingAscending ? "Descending" : "Ascending"}
                </button>
            </div>
            <ul className={styles.list}>
                {sortedQuotes.map((quote) => (
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
