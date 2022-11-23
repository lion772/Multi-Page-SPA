import React, { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/hooks/use-http";
import { getAllComments } from "../../../lib/lib/api";
import { QuoteIdParam } from "../../../pages/QuoteDetail";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import CommentsList from "../CommentsList/CommentsList";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import styles from "./Comments.module.css";

interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
    const { quoteId } = useParams<QuoteIdParam>();
    const [isAddingComment, setIsAddingComment] = useState(false);

    const {
        sendRequest: getComments,
        error,
        status,
        data: loadedComments,
    } = useHttp(getAllComments);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const onAddCommentHandler = useCallback(() => {
        getComments(quoteId);
    }, [getComments, quoteId]);

    useEffect(() => {
        getComments(quoteId);
    }, [getComments, quoteId]);

    let comments;

    if (status === "pending") {
        comments = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (
        status === "completed" &&
        !error &&
        (loadedComments || loadedComments.length > 0)
    ) {
        comments = <CommentsList comments={loadedComments} />;
    }

    if (
        status === "completed" &&
        (!loadedComments || loadedComments.length === 0)
    ) {
        comments = <div className="centered">No Comments were added yet!</div>;
    }

    return (
        <section className={styles.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={quoteId as string}
                    onAddComment={onAddCommentHandler}
                />
            )}
            {comments}
        </section>
    );
};

export default Comments;
