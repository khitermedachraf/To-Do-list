import { todoTasks } from './variables.js';

export default class Task {
  constructor(userTask) {
    this.index = todoTasks.length + 1;
    this.description = userTask.value;
    this.completed = false;
  }
}