import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { QuoteIdParam } from "../../../pages/QuoteDetail";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import styles from "./Comments.module.css";

interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
    const params = useParams<QuoteIdParam>();
    console.log(params);
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
