import React, { FC } from 'react';
import styles from './HighlightedQuote.module.css';

interface HighlightedQuoteProps {}

const HighlightedQuote: FC<HighlightedQuoteProps> = () => (
  <div className={styles.HighlightedQuote}>
    HighlightedQuote Component
  </div>
);

export default HighlightedQuote;
