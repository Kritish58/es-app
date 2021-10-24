import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.module.scss';

function Footer() {
   return (
      <div className={styles.footerContainer}>
         <section className={styles.active}>
            <NavLink exact activeClassName={styles.entryActive} to="/">
               <span>Entry</span>
            </NavLink>
         </section>

         <section>
            <NavLink activeClassName={styles.detailsActive} to="/details">
               <span>Details</span>
            </NavLink>
         </section>

         <section>
            <NavLink activeClassName={styles.historyActive} to="/history">
               <span>History</span>
            </NavLink>
         </section>
      </div>
   );
}

export default Footer;

<section>Entry</section>;
