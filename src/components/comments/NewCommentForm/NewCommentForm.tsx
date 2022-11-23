import React, { FC, useEffect, useRef } from "react";
import useHttp from "../../../hooks/hooks/use-http";
import { addComment } from "../../../lib/lib/api";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import styles from "./NewCommentForm.module.css";

interface NewCommentFormProps {
    quoteId: string;
    onAddComment: () => void;
}

const NewCommentForm: FC<NewCommentFormProps> = ({ quoteId, onAddComment }) => {
    const commentTextRef = useRef<HTMLTextAreaElement>(null);
    const { sendRequest, error, status } = useHttp(addComment);

    useEffect(() => {
        if (!error && status === "completed") {
            onAddComment();
        }
    }, [error, onAddComment, status]);

    const submitFormHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        sendRequest({
            commentData: { text: commentTextRef.current?.value },
            quoteId,
        });
    };

    return (
        <form className={styles.form} onSubmit={submitFormHandler}>
            {status === "pending" && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}
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
