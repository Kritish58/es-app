import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import styles from './history.module.scss';
function History() {
   return (
      <>
         <Header title="History" />

         <main>
            <header className={styles.header}>
               <small>products sold (n)</small>
               <small>purchased price (Rs)</small>
               <small>marked price (Rs)</small>
               <small>profits (Rs)</small>
            </header>
            <section className={styles.section}>
               <small className={styles.date}>Jun 11, 2021</small>
               <NavLink to="/history/1" exact>
                  <div className={styles.data}>
                     <span>44</span>
                     <span>100</span>
                     <span>12</span>
                     <span>200</span>
                  </div>
               </NavLink>
            </section>
         </main>

         <Footer />
      </>
   );
}

export default History;
