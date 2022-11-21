import { FC } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments/Comments";

interface IQuoteDetail {}

export type QuoteIdParam = {
    quoteId: string | undefined;
};

const QuoteDetail: FC<IQuoteDetail> = (props) => {
    const { quoteId } = useParams<QuoteIdParam>();
    return (
        <>
            <p>Your quote is: </p>
            <h3>{quoteId}</h3>
            {/* <Route path={`/quotes/${quoteId}/comments`}> */}
            <Route path={"/quotes/:quoteId/comments"}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
