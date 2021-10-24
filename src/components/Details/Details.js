import React from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header';
import styles from './details.module.scss';

function Details() {
   return (
      <>
         <Header title="Details" />
         <div>
            <span className={styles.date}>Jan 11, 2022, 3:42 PM</span>

            <main className={styles.mainContainer}>
               <section className={styles.productsSold}>
                  <h4>Products sold</h4>
                  <h2>44</h2>
               </section>

               <section className={styles.purchasePrice}>
                  <h4>Purchase Price</h4>
                  <h2>Rs. 10000</h2>
               </section>

               <section className={styles.markedPrice}>
                  <h4>Marked Price</h4>
                  <h2>Rs. 12000</h2>
               </section>

               <section className={styles.profits}>
                  <h4>Profits</h4>
                  <h2>Rs. 2000</h2>
               </section>
            </main>
         </div>

         <Footer />
      </>
   );
}

export default Details;
