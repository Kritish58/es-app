const addRecord = (data) => {
   //* generate current timestamp
   const dateAndTime = new Date();
   let obj = {
      ...data,
      // createdAt: dateAndTime.setDate(dateAndTime.getDate() - 4)
      createdAt: dateAndTime,
   };

   //* fetch existing records and append new record
   const existingRecords = localStorage.getItem('records');
   let arr = JSON.parse(existingRecords);
   arr = [...(arr || []), obj];
   arr = JSON.stringify(arr);
   localStorage.setItem('records', arr);
};

export default addRecord;
