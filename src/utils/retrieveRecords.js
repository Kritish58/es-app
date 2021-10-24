const retrieveRecords = () => {
   let records = localStorage.getItem('records');
   records = JSON.parse(records);
   return records;
};

export default retrieveRecords;
