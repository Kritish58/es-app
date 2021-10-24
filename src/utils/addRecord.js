const addRecord = (data) => {
   //* generate current timestamp
   const dateAndTime = Date.now();
   let obj = { ...data, createdAt: dateAndTime };

   //* fetch existing records and append new record
   const existingRecords = localStorage.getItem('records');
   let arr = JSON.parse(existingRecords);
   arr = [...(arr || []), obj];
   arr = JSON.stringify(arr);
   localStorage.setItem('records', arr);
};

export default addRecord;
