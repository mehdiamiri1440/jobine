import React from 'react';
import styles from './styles.scss';

const Spin = ({ spinning, children }) => {
  return (
    <>
      <div className={spinning ? `${styles.loadingContainer}` : ''}>
        {children}
        {spinning && <img src={require('../../assets/icons/spinner.gif')} className={styles.loadingSpinner} />}
      </div>
    </>
  );
};

export default Spin;
