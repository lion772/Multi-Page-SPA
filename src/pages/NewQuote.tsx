import { FC } from "react";
import { redirect } from "react-router-dom";
import QuoteForm, { Quote } from "../components/quotes/QuoteForm/QuoteForm";
import { addQuote } from "../lib/lib/api";

interface INewQuote {}

const NewQuote: FC<INewQuote> = (props) => {
    return <QuoteForm />;
};

export default NewQuote;

export async function action({ request }: { request: any }) {
    const data = await request.formData();
    const quote: Quote = {
        author: data.get("author"),
        text: data.get("text"),
    };

    const validationError = await addQuote(quote);
    if (validationError) {
        return validationError;
    }

    return redirect("/quotes");
}

/* Redirect vs useHistory:
 Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
whereas History (useHistory)
push function Pushes a new entry onto the history stack */
