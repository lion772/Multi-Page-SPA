import { FC } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
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
    const { path: quotePath, url } = useRouteMatch();
    console.log(quotePath);
    console.log(url);

    const quote = quoteList.find((quote) => quote.id === quoteId);

    if (!quote) {
        return <h3>No Quote Found!</h3>;
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={quotePath} exact>
                <Link className="btn--flat" to={`${url}/comments`}>
                    Load comments
                </Link>
            </Route>
            <Route path={`${quotePath}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;

/* We have to use match.url for Link. Since what we need is to add /comments based on CURRENT URL instead of path. Imagining, furthermore, comments should be stored for each quote.

match.path is used for Route components for the purpose of Dynamic Params. Therefore, all possible params could fit in. */
