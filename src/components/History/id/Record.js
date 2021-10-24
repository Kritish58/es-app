import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import styles from './record.module.scss';
import arrowImg from '../../../assets/right-arrow.png';
import { useHistory } from 'react-router-dom';
import { getDayRecord } from '../../../utils/dayRecord';

function Record() {
   const history = useHistory();
   const handleGoBack = () => {
      history.goBack();
   };

   const [data, setData] = useState([]);

   useEffect(() => {
      const dt = getDayRecord();
      setData(dt);
      return () => {};
   }, []);

   return (
      <div className={styles.container}>
         <Header title="Record" />
         <img onClick={handleGoBack} className={styles.goBackImage} src={arrowImg} alt="goback" />
         <small className={styles.entries}>
            {data[1]?.length} entries ({moment(data?.[1]?.[0]?.createdAt).format('MMMM Do YYYY')})
         </small>
         <main className={styles.main}>
            {data[1]?.map((record, i) => {
               return (
                  <section key={i}>
                     <div className={styles.record}>
                        <small className={styles.label}>Product Name</small>
                        <small className={styles.value}>{record.productName}</small>
                     </div>

                     <div className={styles.record}>
                        <small className={styles.label}>Quantity</small>
                        <small className={styles.value}>{record.quantity}</small>
                     </div>
                     <div className={styles.record}>
                        <small className={styles.label}>Purchase Price</small>
                        <small className={styles.value}>{record.purchasedPrice} per unit</small>
                     </div>
                     <div className={styles.record}>
                        <small className={styles.label}>MarkedPrice</small>
                        <small className={styles.value}>{record.markedPrice} per unit</small>
                     </div>
                     <div className={styles.record}>
                        <small className={styles.label}>Gross Purchase Price</small>
                        <small className={styles.value}>
                           {parseInt(record.quantity, 10) * parseInt(record.purchasedPrice, 10)}
                        </small>
                     </div>
                     <div className={styles.record}>
                        <small className={styles.label}>Gross Marked Price</small>
                        <small className={styles.value}>
                           {parseInt(record.quantity, 10) * parseInt(record.markedPrice, 10)}
                        </small>
                     </div>
                     <div className={styles.record}>
                        <small className={styles.label}>Profit</small>
                        <small className={styles.value}>
                           {parseInt(record.quantity, 10) * parseInt(record.markedPrice, 10) -
                              parseInt(record.quantity, 10) * parseInt(record.purchasedPrice, 10)}
                        </small>
                     </div>
                     <div className={styles.record}>
                        <small className={styles.label}>CreatedAt</small>
                        <small className={styles.value}>
                           {moment(record.createdAt).format('MMMM Do YYYY, h:mm a')}
                        </small>
                     </div>
                  </section>
               );
            })}
         </main>
         <Footer />
      </div>
   );
}

export default Record;
