import React, { FC, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addComment, getAllComments } from "../../../lib/lib/api";
import CommentsList from "../CommentsList/CommentsList";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import styles from "./Comments.module.css";

interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
    /*     const { quoteId } = useParams<QuoteIdParam>();
     */ const [isAddingComment, setIsAddingComment] = useState(false);
    const loadedComments = useLoaderData() as [{ id: string; text: string }];

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    return (
        <>
            <div className={styles.comments}>
                <h2>User Comments</h2>
                {!isAddingComment && (
                    <button className="btn" onClick={startAddCommentHandler}>
                        Add a Comment
                    </button>
                )}
                {isAddingComment && <NewCommentForm />}
                {loadedComments && <CommentsList comments={loadedComments} />}
            </div>
        </>
    );
};

export default Comments;

export function loader({ params }: { params: any }) {
    return getAllComments(params.quoteId);
}

export async function action({
    request,
    params,
}: {
    request: any;
    params: any;
}) {
    const data = await request.formData();
    const comment = {
        commentData: { text: data.get("comment") },
        quoteId: params.quoteId,
    };

    const validationError = await addComment(comment);

    if (validationError) {
        return validationError;
    }
}
