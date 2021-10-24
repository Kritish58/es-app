import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import styles from './entry.module.scss';

function Entry() {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      notify();
      reset();
   };

   const notify = () => {
      toast.success('record added successfully');
   };

   return (
      <>
         <Header title="Entry" />
         <div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.inputSection}>
                  <label htmlFor="productName">Product Name</label>
                  <textarea
                     id="productName"
                     type="text"
                     {...register('productName', { required: true, maxLength: 100 })}
                  />

                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
                  {errors.productName && errors.productName.type === 'required' && (
                     <small className={styles.error}>product name is required*</small>
                  )}
                  {errors.productName && errors.productName.type === 'maxLength' && (
                     <small className={styles.error}>Max Length exceeded (100)</small>
                  )}
                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
               </div>

               <div className={styles.inputSection}>
                  <label htmlFor="entry-quantity">Quantity</label>
                  <input
                     id="entry-quantity"
                     type="text"
                     {...register('quantity', { required: true, min: 1, max: 100 })}
                     defaultValue={1}
                  />

                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
                  {errors.quantity && errors.quantity.type === 'required' && (
                     <small className={styles.error}>quantity is required*</small>
                  )}
                  {errors.quantity && errors.quantity.type === 'min' && (
                     <small className={styles.error}>min quantity is 1</small>
                  )}
                  {errors.quantity && errors.quantity.type === 'max' && (
                     <small className={styles.error}>max quantity exceeded (100)</small>
                  )}
                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
               </div>

               <div className={styles.inputSection}>
                  <label htmlFor="entry-markedPrice">Marked Price</label>
                  <input
                     id="entry-markedPrice"
                     type="number"
                     {...register('markedPrice', { required: true, min: 10, max: 100000 })}
                  />

                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
                  {errors.markedPrice && errors.markedPrice.type === 'required' && (
                     <small className={styles.error}>marked price is required*</small>
                  )}

                  {errors.markedPrice && errors.markedPrice.type === 'min' && (
                     <small className={styles.error}>min marked price is 10</small>
                  )}

                  {errors.markedPrice && errors.markedPrice.type === 'max' && (
                     <small className={styles.error}>max marked price exceeded (100000)</small>
                  )}
                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
               </div>

               <div className={styles.inputSection}>
                  <label htmlFor="entry-purchasedPrice">Purchase Price</label>
                  <input
                     id="entry-purchasedPrice"
                     type="number"
                     {...register('purchasedPrice', { required: true, min: 10, max: 100000 })}
                  />
                  {/* 🚩🚩🚩🚩🚩🚩🚩*/}
                  {errors.purchasedPrice && errors.purchasedPrice.type === 'required' && (
                     <small className={styles.error}>purchased price is required*</small>
                  )}

                  {errors.purchasedPrice && errors.purchasedPrice.type === 'min' && (
                     <small className={styles.error}>min purchased price is 10</small>
                  )}

                  {errors.purchasedPrice && errors.purchasedPrice.type === 'max' && (
                     <small className={styles.error}>max purchased price exceeded (100000)</small>
                  )}
                  {/* 🚩🚩🚩🚩🚩🚩🚩 */}
               </div>

               <div>
                  <button type="submit">DONE</button>
               </div>
            </form>
         </div>

         <Footer />
      </>
   );
}

export default Entry;
