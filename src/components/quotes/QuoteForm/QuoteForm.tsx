import React, { FC } from 'react';
import styles from './QuoteForm.module.css';

interface QuoteFormProps {}

const QuoteForm: FC<QuoteFormProps> = () => (
  <div className={styles.QuoteForm}>
    QuoteForm Component
  </div>
);

export default QuoteForm;
