export const updateDayRecord = (record) => {
   localStorage.setItem('dayRecord', JSON.stringify(record));
};

export const getDayRecord = () => {
   const record = JSON.parse(localStorage.getItem('dayRecord'));
   return record;
};
