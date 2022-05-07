/* eslint-disable no-plusplus */
import { todoTasks } from './variables.js';

export default class Helpers {
  static updateIndex = () => {
    let count = 0;
    todoTasks.forEach((element) => {
      if (count === 0) {
        element.index = 1;
      } else {
        todoTasks[count].index = todoTasks[count - 1].index + 1;
      }
      count++;
    });
  };
}