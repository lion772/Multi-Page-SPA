import React, { FC } from "react";
import styles from "./CommentItem.module.css";

interface CommentItemProps {
    text: string;
}

const CommentItem: FC<CommentItemProps> = ({ text }) => {
    return (
        <li className={styles.item}>
            <p>{text}</p>
        </li>
    );
};

export default CommentItem;
