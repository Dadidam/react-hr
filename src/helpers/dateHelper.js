export const formatDate = dateString => {
  const dateObj = new Date(dateString);
  const mm = dateObj.getMonth() + 1; // starting from 0 in JS Date()
  const dd = dateObj.getDate();
  const yyyy = dateObj.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
};
