export const FIELD_YEAR = (() => {
  const yearNow = new Date().getFullYear();
  return [...Array(yearNow - 1998)].map((x, i) => 1999 + i);
})();
