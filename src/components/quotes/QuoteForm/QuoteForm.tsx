import React, { FC, useRef } from "react";
import Card from "../../UI/Card/Card";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import styles from "./QuoteForm.module.css";

export type Quote = {
    author: string | undefined;
    text: string | undefined;
};

interface QuoteFormProps {
    onAddQuote: (data: Quote) => void;
    isLoading: boolean;
}

const QuoteForm: FC<QuoteFormProps> = (props) => {
    const authorInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLTextAreaElement>(null);

    function submitFormHandler(event: React.SyntheticEvent) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current?.value;
        const enteredText = textInputRef.current?.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitFormHandler}>
                {props.isLoading && (
                    <div className={styles.loading}>
                        <LoadingSpinner />
                    </div>
                )}

                <div className={styles.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" rows={5} ref={textInputRef}></textarea>
                </div>
                <div className={styles.actions}>
                    <button className="btn">Add Quote</button>
                </div>
            </form>
        </Card>
    );
};

export default QuoteForm;
