import { FC } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote/HighlightedQuote";

interface IQuoteDetail {}

export type QuoteIdParam = {
    quoteId: string | undefined;
};

let quoteList = [
    { id: "q1", author: "Will", text: "Learning react is fun" },
    { id: "q2", author: "Steinke", text: "Learning react is great!" },
];

const QuoteDetail: FC<IQuoteDetail> = () => {
    const { quoteId } = useParams<QuoteIdParam>();

    const quote = quoteList.find((quote) => quote.id === quoteId);

    if (!quote) {
        return <h3>No Quote Found!</h3>;
    }

    return (
        <>
            <p>Your quote is: </p>
            <h3>{quoteId}</h3>
            {/* <Route path={`/quotes/${quoteId}/comments`}> */}
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={"/quotes/:quoteId/comments"}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
