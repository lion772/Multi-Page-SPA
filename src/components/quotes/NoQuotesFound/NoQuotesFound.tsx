import React, { FC } from 'react';
import styles from './NoQuotesFound.module.css';

interface NoQuotesFoundProps {}

const NoQuotesFound: FC<NoQuotesFoundProps> = () => (
  <div className={styles.NoQuotesFound}>
    NoQuotesFound Component
  </div>
);

export default NoQuotesFound;
