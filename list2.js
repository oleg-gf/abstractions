/*
Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение элементом списка.

const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false
Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.

const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)
Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс (попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).

const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
*/
export const has = (numbers, n) => {
  while (empty(numbers) === false) {
    if (head(numbers) === n) { return true;}
    numbers = tail(numbers);
  }
  return false;
};
export const reverse = (numbers) => {
  let result = l();
  while (empty(numbers) === false) {
    result = cons(head(numbers), result);
    numbers = tail(numbers);
  }
  return result;
};

export const concat2 = (numbers, numbers2) => {
  if (empty(numbers)) {
    return numbers2;
  }
  return concat2(tail(numbers), cons(head(numbers), numbers2));
};
export const concat = (numbers, numbers2) => {
  numbers = reverse(numbers);
  return concat2 (numbers, numbers2);
};
