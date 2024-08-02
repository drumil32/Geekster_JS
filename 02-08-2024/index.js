const date = new Date();
const birthDate = new Date("2002-11-16");
const diff = date - birthDate;
const dateDiff = new Date(diff);

const yearDiff = dateDiff.getFullYear() - 1970;
const monthDiff = dateDiff.getMonth();
const dayDiff = dateDiff.getDate()-1;

console.log(yearDiff, monthDiff, dayDiff);