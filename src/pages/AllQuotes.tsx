import { FC } from "react";
import QuoteList from "../components/quotes/QuoteList/QuoteList";

let quoteList = [
    { id: "q1", author: "Will", text: "Learning react is fun" },
    { id: "q2", author: "Steinke", text: "Learning react is great!" },
];

interface IAllQuotes {}

const AllQuotes: FC<IAllQuotes> = (props) => {
    return (
        <>
            <QuoteList quotes={quoteList} />
        </>
    );
};

export default AllQuotes;
