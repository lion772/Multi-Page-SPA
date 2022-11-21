import React, { FC } from 'react';
import styles from './NewCommentForm.module.css';

interface NewCommentFormProps {}

const NewCommentForm: FC<NewCommentFormProps> = () => (
  <div className={styles.NewCommentForm}>
    NewCommentForm Component
  </div>
);

export default NewCommentForm;
