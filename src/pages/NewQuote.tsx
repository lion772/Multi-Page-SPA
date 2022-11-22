import { FC } from "react";
import QuoteForm, { Quote } from "../components/quotes/QuoteForm/QuoteForm";

interface INewQuote {}

const NewQuote: FC<INewQuote> = (props) => {
    const onAddQuoteHandler = (data: Quote) => {
        console.log(data);
    };
    return (
        <>
            <QuoteForm onAddQuote={onAddQuoteHandler} isLoading={false} />
        </>
    );
};

export default NewQuote;
