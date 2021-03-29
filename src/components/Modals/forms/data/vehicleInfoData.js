console.log("exporting vehicle info..");
export const FIELD_YEAR = (() => {
  const yearNow = new Date().getFullYear();
  // "", == for empty value
  return ["", ...[...Array(yearNow - 1998)].map((x, i) => 1999 + i)];
})();

export const FIELD_BRAND = ["", "Brand A", "Brand B", "Brand C"];
export const FIELD_TRANSMISSION_TYPE = [
  "",
  "Tansmission A",
  "Tansmission B",
  "Tansmission C",
];
export const FIELD_FUEL_TYPE = ["", "Gas A", "Gas B", "Gas C"];
export const FIELD_COLOR = ["", "Red", "Green", "Blue"];
