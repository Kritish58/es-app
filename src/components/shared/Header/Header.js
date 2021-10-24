import React from 'react';
import styles from './header.module.scss';

function Header({ title }) {
   return (
      <>
         <h2 className={styles.title}>{title}</h2>
      </>
   );
}

export default Header;
