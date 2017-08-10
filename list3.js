const append = (list, item) => {
  if (item === null) {
    return list;
  }
  const iter = (list, acc) => {
    if (empty(list)) {
    return acc;
    }
    return cons(head(list), iter(tail(list), acc));
    };
  return iter(list, cons(item, null));
};

const filter = (callback, list) => {
  const iter = (list, acc) => {
    if (empty(list)) {
    return acc;
    }
    if (callback(head(list))) {
      acc = append(acc, head(list));
    }
    return iter(tail(list), acc)
  };
  return iter(list, l());
};

const map = (callback, list) => {
  const iter = (list, acc) => {
    if (empty(list)) {
    return acc;
    }
    acc = append(acc, callback(head(list)));
    return iter(tail(list), acc)
  };
  return iter(list, l());
};

const reduce = (callback, acc, list) => {
  if (empty(list)) {
    return acc;
    }
    acc = callback(acc, head(list));
  return reduce(callback, acc, tail(list));
};

const quicksort = (list) => {
    if (empty(list)) {
      return l();
    }
    const pivot = head(list);
    const greater = filter(item => item > pivot ? item : l(), list);
    const less = filter(item => item < pivot ? item : l(), list);
    const equal = filter(item => item === pivot ? item : l(), list);
  console.log(toString(less), pivot, toString(equal), toString(greater));
  return concat(quicksort(less), concat(equal, quicksort(greater)));
};

const list = l('gf', 'fgg2', 'fg', 'ghgcvd');
reduce((acc, item) => acc ? `${acc},${item}` : item, '', list);
