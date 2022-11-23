import { FC, useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import useHttp from "../hooks/hooks/use-http";
import { getAllQuotes } from "../lib/lib/api";

interface IAllQuotes {}

const AllQuotes: FC<IAllQuotes> = () => {
    const {
        sendRequest,
        status,
        error,
        data: loadedQuotes,
    } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

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

    if (
        status === "completed" &&
        (!loadedQuotes || loadedQuotes.length === 0)
    ) {
        return <NoQuotesFound />;
    }

    return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
