const includes = (str1, str2) => str1 && str1.toLowerCase().includes(str2.toLowerCase());

const comparer = (field, direction) => (a, b) => {
  const factor = direction ? 1 : -1;
  if (a[field] < b[field]) return -factor;
  if (a[field] > b[field]) return factor;
  return 0;
};

export { includes, comparer };
