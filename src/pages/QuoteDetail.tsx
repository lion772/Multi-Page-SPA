import { FC } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote/HighlightedQuote";

import { getSingleQuote } from "../lib/lib/api";

interface IQuoteDetail {}

export type QuoteIdParam = {
    quoteId: string | undefined;
};

const QuoteDetail: FC<IQuoteDetail> = () => {
    const loadedQuote = useLoaderData();

    return (
        <>
            <HighlightedQuote
                text={(loadedQuote as any).text}
                author={(loadedQuote as any).author}
            />
            <Outlet />
        </>
    );
};

export default QuoteDetail;

export function loader({ params }: { params: any }) {
    return getSingleQuote(params.quoteId);
}

/* We have to use match.url for Link. Since what we need is to add /comments based on CURRENT URL instead of path. Imagining, furthermore, comments should be stored for each quote.

match.path is used for Route components for the purpose of Dynamic Params. Therefore, all possible params could fit in. */
