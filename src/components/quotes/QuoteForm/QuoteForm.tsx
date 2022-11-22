import React, { FC, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
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
    const [isEntering, setIsEntering] = useState(false);

    function submitFormHandler(event: React.SyntheticEvent) {
        event.preventDefault();
        //props.isLoading = true;
        const enteredAuthor = authorInputRef.current?.value;
        const enteredText = textInputRef.current?.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
        //props.isLoading = false;
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const onFocusHandler = () => {
        setIsEntering(true);
    };

    return (
        <>
            <Prompt
                when={isEntering}
                message={(location) =>
                    "Are you sure you want to leave the page? Data will be lost !"
                }
            />
            <Card>
                <form
                    onFocus={onFocusHandler}
                    className={styles.form}
                    onSubmit={submitFormHandler}
                >
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
                        <textarea
                            id="text"
                            rows={5}
                            ref={textInputRef}
                        ></textarea>
                    </div>
                    <div className={styles.actions}>
                        <button onClick={finishEnteringHandler} className="btn">
                            Add Quote
                        </button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default QuoteForm;
