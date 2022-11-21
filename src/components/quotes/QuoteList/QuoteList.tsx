import React, { FC } from 'react';
import styles from './QuoteList.module.css';

interface QuoteListProps {}

const QuoteList: FC<QuoteListProps> = () => (
  <div className={styles.QuoteList}>
    QuoteList Component
  </div>
);

export default QuoteList;
