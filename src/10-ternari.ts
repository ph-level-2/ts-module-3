// ternary operator
let age = 24;
const adult = age >= 18 ? 'Yes' : 'no';

// Nullish operator
// only work for null and undefined

const isAuth = '';
const userName = isAuth ?? 'gest';
const userName2 = isAuth ? isAuth : 'gest';
