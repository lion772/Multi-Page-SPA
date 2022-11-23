import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
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
            <Outlet />
        </>
    );
};

export default QuoteDetail;

/* We have to use match.url for Link. Since what we need is to add /comments based on CURRENT URL instead of path. Imagining, furthermore, comments should be stored for each quote.

match.path is used for Route components for the purpose of Dynamic Params. Therefore, all possible params could fit in. */
