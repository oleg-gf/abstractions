const cons = (x, y) => f => f(x, y);
 const car = f  => f((x, y) =>  x);
 const cdr =  f => f((x, y) => y);

const l = (...args) => {
  if (args === []) {
    return null;
  }
  const iter = (arg, acc) => {
    if (arg === undefined) {
      return null;
    }
    acc++;
    return cons(arg, iter(args[acc], acc));
  };
  return iter(args[0], 0);
};
const toString = (list) => {
  const iter = (arg, count,  result) => {
    if (arg === null) {
      result += ')';
      return result;
    }
    count > 0 ? result += ', ' + car(arg) : result += car(arg);
    count++;
    return iter(cdr(arg), count, result);
  };
 return '(' + iter(list, 0, '');
};
const head = (list) => list === null ? l() : car(list);
const tail = (list) => list === null || cdr(list) === null ? l() : cdr(list);
const empty = (list) => list === null ? true : false;
