import React, { FC, useRef } from "react";
import styles from "./NewCommentForm.module.css";

interface NewCommentFormProps {}

const NewCommentForm: FC<NewCommentFormProps> = () => {
    const commentTextRef = useRef<HTMLTextAreaElement>(null);

    const submitFormHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        // optional: Could validate here

        // send comment to server
    };

    return (
        <form className={styles.form} onSubmit={submitFormHandler}>
            <div className={styles.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
            </div>
            <div className={styles.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
