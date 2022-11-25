import React, { FC } from "react";
import { Form } from "react-router-dom";
import styles from "./NewCommentForm.module.css";

interface NewCommentFormProps {}

const NewCommentForm: FC<NewCommentFormProps> = () => {
    return (
        <>
            <Form className={styles.form} method="post" action={""}>
                <div className={styles.control}>
                    <label htmlFor="comment">Your Comment</label>
                    <textarea id="comment" rows={5} name="comment"></textarea>
                </div>
                <div className={styles.actions}>
                    <button className="btn">Add Comment</button>
                </div>
            </Form>
        </>
    );
};

export default NewCommentForm;
