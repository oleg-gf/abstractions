/*
Реализуйте базовый интерфейс для создания html. Он включает в себя следующие функции:

make - конструктор.
node - создает новый тег. Содержит два элемента, имя тега и его содержимое. Дополнительно реализуйте селекторы тега: name и value
append - добавляет элемент в список.
toString - возвращает текстовое представление html
Пример использования этого интерфейса:

import { make, append, toString, node } from './html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'hello, world'));
const dom = append(dom2, node('h2', 'header2'));

toString(dom);
// <h1>hello, world</h1><h2>header2</h2>
*/
import { cons, car, cdr, toString as pairToString } from 'pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'list';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'list'
export const make = () =>  l();
export const node = (name, value) => cons(name, value);
export const name = (pair) => car(pair);
export const value = (pair) => cdr(pair);
export const append = (dom, node) =>  consList(node, dom);
export const toString = (x) => {
  if (isEmpty(x)) {
    return '';
  }
  let tag = name(head(x));
  let text = value(head(x));
  x = tail(x);
  return toString(x) + `<${tag}>${text}</${tag}>` ;

};
