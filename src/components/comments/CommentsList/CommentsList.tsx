import React, { FC } from "react";
import CommentItem from "../CommentItem/CommentItem";
import styles from "./CommentsList.module.css";

interface CommentsListProps {
    comments: [{ id: string; text: string }];
}

const CommentsList: FC<CommentsListProps> = (props) => {
    return (
        <ul className={styles.comments}>
            {props.comments.map((comment) => (
                <CommentItem key={comment.id} text={comment.text} />
            ))}
        </ul>
    );
};

export default CommentsList;
