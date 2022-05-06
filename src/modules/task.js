import { todoTasks } from './variables.js';

export default class Task {
  constructor(userTask) {
    this.id = todoTasks.length + 1;
    this.description = userTask.value;
    this.completed = false;
  }
}