module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  start_date: (date) => {
    return parseInt(date).toLocaleString();
  },
  due_date: (date) => {
    return parseInt(date).toLocaleString();
  },
  date_completed: (date) => {
    return parseInt(date).toLocaleString();
  },
  record_created: (date) => {
    return parseInt(date).toLocaleString();
  },
  record_updated: (date) => {
    return parseInt(date).toLocaleString();
  },
  purchased_date: (date) => {
    return parseInt(date).toLocaleString();
  },
};
