import moment from 'moment';
import _ from 'underscore';
import retrieveRecords from './retrieveRecords';

function getTodaysRecord() {
   //* fetches all existing records
   const arr = retrieveRecords() || [];

   //* group records by day
   const groups = _.groupBy(arr, function (el) {
      return moment(el.createdAt).startOf('day').format('YYYY-MM-DD');
   });

   //*  today's record
   const today = moment(new Date()).format('YYYY-MM-DD');
   const data = groups[today].map((record) => {
      return {
         productName: record.productName,
         quantity: parseInt(record.quantity, 10),
         purchasedPrice: parseInt(record.purchasedPrice, 10),
         markedPrice: parseInt(record.markedPrice, 10),
         createdAt: record.createdAt,
      };
   });

   const obj = {
      prodsSold: data.reduce((acc, currentValue) => {
         return acc + currentValue.quantity;
      }, 0),
      purchasedPrice: data.reduce((acc, currentValue) => {
         return acc + currentValue.quantity * currentValue.purchasedPrice;
      }, 0),
      markedPrice: data.reduce((acc, currentValue) => {
         return acc + currentValue.markedPrice * currentValue.quantity;
      }, 0),
   };

   return obj;
}

export default getTodaysRecord;
