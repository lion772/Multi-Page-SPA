import React, { FC } from "react";
import { Form } from "react-router-dom";
import Card from "../../UI/Card/Card";
import styles from "./QuoteForm.module.css";

export type Quote = {
    author: string | undefined;
    text: string | undefined;
};

interface QuoteFormProps {}

const QuoteForm: FC<QuoteFormProps> = () => {
    return (
        <>
            <Card>
                <Form className={styles.form} method="post" action="/new-quote">
                    <div className={styles.control}>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="text">Text</label>
                        <textarea id="text" rows={5} name={"text"}></textarea>
                    </div>
                    <div className={styles.actions}>
                        <button className="btn">Add Quote</button>
                    </div>
                </Form>
            </Card>
        </>
    );
};

export default QuoteForm;
