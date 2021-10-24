import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header';
import styles from './details.module.scss';
import getTodaysRecord from '../../utils/getTodayRecord';

function Details() {
   const [record, setRecord] = useState({
      prodsSold: 0,
      purchasedPrice: 0,
      markedPrice: 0,
   });

   useEffect(() => {
      const obj = getTodaysRecord();
      setRecord(obj);
      return () => {};
   }, []);

   return (
      <>
         <Header title="Details" />
         <div>
            <span className={styles.date}>{moment(new Date()).format('MMMM Do YYYY')}</span>

            <main className={styles.mainContainer}>
               <section className={styles.productsSold}>
                  <h4>Products sold</h4>
                  <h2>{record.prodsSold || 0}</h2>
               </section>

               <section className={styles.purchasePrice}>
                  <h4>Purchase Price</h4>
                  <h2>Rs. {record.purchasedPrice || 0}</h2>
               </section>

               <section className={styles.markedPrice}>
                  <h4>Marked Price</h4>
                  <h2>Rs. {record.markedPrice || 0}</h2>
               </section>

               <section className={styles.profits}>
                  <h4>Profits</h4>
                  <h2>Rs. {record.markedPrice - record.purchasedPrice || 0}</h2>
               </section>
            </main>
         </div>

         <Footer />
      </>
   );
}

export default Details;
