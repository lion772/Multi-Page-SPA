import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm, { Quote } from "../components/quotes/QuoteForm/QuoteForm";
import useHttp from "../hooks/hooks/use-http";
import { addQuote } from "../lib/lib/api";

interface INewQuote {}

const NewQuote: FC<INewQuote> = (props) => {
    const navigate = useNavigate();

    const { sendRequest: postQuote, status, error } = useHttp(addQuote);

    useEffect(() => {
        if (!error && status === "completed") {
            navigate("/quotes");
        }
    }, [error, navigate, status]);

    const onAddQuoteHandler = (data: Quote) => {
        postQuote(data);
    };
    return (
        <QuoteForm
            onAddQuote={onAddQuoteHandler}
            isLoading={status === "pending"}
        />
    );
};

export default NewQuote;

/* Redirect vs useHistory:
 Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
whereas History (useHistory)
push function Pushes a new entry onto the history stack */
