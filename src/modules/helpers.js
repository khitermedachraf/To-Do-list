/* eslint-disable no-plusplus */
import { todoTasks } from './variables.js';

export default class Helpers {
  static updateIndex = () => {
    let count = 0;
    todoTasks.forEach((element) => {
      if (count === 0) {
        element.id = 1;
      } else {
        todoTasks[count].id = todoTasks[count - 1].id + 1;
      }
      count++;
    });
  };
}