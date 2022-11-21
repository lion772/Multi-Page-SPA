import React, { FC } from 'react';
import styles from './QuoteItem.module.css';

interface QuoteItemProps {}

const QuoteItem: FC<QuoteItemProps> = () => (
  <div className={styles.QuoteItem}>
    QuoteItem Component
  </div>
);

export default QuoteItem;
