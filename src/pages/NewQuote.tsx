import { FC } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm, { Quote } from "../components/quotes/QuoteForm/QuoteForm";

interface INewQuote {}

const NewQuote: FC<INewQuote> = (props) => {
    const history = useHistory();
    const onAddQuoteHandler = (data: Quote) => {
        console.log(data);
        //With push you can allow anyone to go back with the 'back button'
        history.push("/quotes");
    };
    return (
        <>
            <QuoteForm onAddQuote={onAddQuoteHandler} isLoading={false} />
        </>
    );
};

export default NewQuote;

/* Redirect vs useHistory:
 Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
whereas History (useHistory)
push function Pushes a new entry onto the history stack */
