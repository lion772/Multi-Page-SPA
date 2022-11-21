import React, { FC } from 'react';
import styles from './CommentsList.module.css';

interface CommentsListProps {}

const CommentsList: FC<CommentsListProps> = () => (
  <div className={styles.CommentsList}>
    CommentsList Component
  </div>
);

export default CommentsList;
