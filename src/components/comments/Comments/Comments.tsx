import React, { FC, useState } from "react";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import styles from "./Comments.module.css";

interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    return (
        <section className={styles.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm />}
            <p>Comments...</p>
        </section>
    );
};

export default Comments;
