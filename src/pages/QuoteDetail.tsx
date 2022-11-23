import { FC, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import useHttp from "../hooks/hooks/use-http";
import { getSingleQuote } from "../lib/lib/api";

interface IQuoteDetail {}

export type QuoteIdParam = {
    quoteId: string | undefined;
};

const QuoteDetail: FC<IQuoteDetail> = () => {
    const { quoteId } = useParams<QuoteIdParam>();
    const { path: quotePath, url } = useRouteMatch();

    const {
        sendRequest: getSingleQuoteById,
        status,
        error,
        data: loadedQuote,
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        getSingleQuoteById(quoteId);
    }, [getSingleQuoteById, quoteId]);

    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (status === "completed" && (!loadedQuote || !loadedQuote.text)) {
        return <NoQuotesFound />;
    }

    return (
        <>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />

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
