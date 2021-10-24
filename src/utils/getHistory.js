import _ from 'underscore';
import moment from 'moment';
import retrieveRecords from './retrieveRecords';

function getHistory() {
   //* fetches all existing records
   const arr = retrieveRecords() || [];

   //* group records by day
   const groups = _.groupBy(arr, function (el) {
      return moment(el.createdAt).startOf('day').format('MMMM Do YYYY');
   });

   return groups;
}

export default getHistory;
