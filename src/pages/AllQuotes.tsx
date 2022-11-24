import { FC } from "react";
import { useLoaderData } from "react-router-dom";
import QuoteList, { Quotes } from "../components/quotes/QuoteList/QuoteList";
import { getAllQuotes } from "../lib/lib/api";

interface IAllQuotes {}

const AllQuotes: FC<IAllQuotes> = () => {
    const loadedQuotes = useLoaderData();
    return <QuoteList quotes={loadedQuotes as Quotes} />;
};

export default AllQuotes;

export function loader() {
    return getAllQuotes();
}
