import React from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import styles from './record.module.scss';
import arrowImg from '../../../assets/right-arrow.png';
import { useHistory } from 'react-router-dom';

function Record() {
   const history = useHistory();
   const handleGoBack = () => {
      history.goBack();
   };
   return (
      <div className={styles.container}>
         <Header title="Record" />
         <img onClick={handleGoBack} className={styles.goBackImage} src={arrowImg} alt="goback" />
         <main className={styles.main}>
            <small className={styles.date}>May 21, 2022</small>
            <div className={styles.record}>
               <small className={styles.label}>Product Name</small>
               <small className={styles.value}>Lorem ipsum dolor sit.</small>
            </div>

            <div className={styles.record}>
               <small className={styles.label}>Quantity</small>
               <small className={styles.value}>2</small>
            </div>
            <div className={styles.record}>
               <small className={styles.label}>Purchase Price</small>
               <small className={styles.value}>10000 per unit</small>
            </div>
            <div className={styles.record}>
               <small className={styles.label}>MarkedPrice</small>
               <small className={styles.value}>12000 per unit</small>
            </div>
            <div className={styles.record}>
               <small className={styles.label}>Gross Purchase Price</small>
               <small className={styles.value}>20000</small>
            </div>
            <div className={styles.record}>
               <small className={styles.label}>Gross Marked Price</small>
               <small className={styles.value}>24000</small>
            </div>
            <div className={styles.record}>
               <small className={styles.label}>Profit</small>
               <small className={styles.value}>4000</small>
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default Record;
