export const cons = (x, y) => f => f(x, y);
export const car = f  => f((x, y) =>  x);
export const cdr =  f => f((x, y) => y);
