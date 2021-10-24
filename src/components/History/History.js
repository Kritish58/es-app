import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import getHistory from '../../utils/getHistory';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import { updateDayRecord, getDayRecord } from '../../utils/dayRecord';

import styles from './history.module.scss';
function History() {
   const [groups, setGroups] = useState([]);

   useEffect(() => {
      const data = getHistory();
      setGroups(data);
      return () => {};
   }, []);

   const handleViewRecord = (el) => {
      console.log('view record');
      updateDayRecord(el);
      console.log(getDayRecord());
   };

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
            {Object.entries(groups).map((el) => {
               return (
                  <section key={el[0]} className={styles.section}>
                     <small className={styles.date}>{el[0]}</small>
                     <NavLink onClick={() => handleViewRecord(el)} to="/history/daily-record" exact>
                        <div className={styles.data}>
                           <span>
                              {el[1].reduce((acc, currentValue) => {
                                 return acc + parseInt(currentValue.quantity, 10);
                              }, 0)}
                           </span>
                           <span>
                              {el[1].reduce((acc, currentValue) => {
                                 return (
                                    acc +
                                    parseInt(currentValue.quantity, 10) * parseInt(currentValue.purchasedPrice, 10)
                                 );
                              }, 0)}
                           </span>
                           <span>
                              {el[1].reduce((acc, currentValue) => {
                                 return (
                                    acc + parseInt(currentValue.quantity, 10) * parseInt(currentValue.markedPrice, 10)
                                 );
                              }, 0)}
                           </span>
                           <span>
                              {el[1].reduce((acc, currentValue) => {
                                 return (
                                    acc + parseInt(currentValue.quantity, 10) * parseInt(currentValue.markedPrice, 10)
                                 );
                              }, 0) -
                                 el[1].reduce((acc, currentValue) => {
                                    return (
                                       acc +
                                       parseInt(currentValue.quantity, 10) * parseInt(currentValue.purchasedPrice, 10)
                                    );
                                 }, 0)}
                           </span>
                        </div>
                     </NavLink>
                  </section>
               );
            })}
         </main>

         <Footer />
      </>
   );
}

export default History;
