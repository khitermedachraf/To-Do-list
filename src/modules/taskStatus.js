import { todoContainer, todoTasks } from './variables.js';
import LocalStorage from './localStorage.js';

export default class TaskStatus {
  // toggle the completed status
  static toggleCompleted = () => {
    todoContainer.addEventListener('change', (event) => {
      if (event.target.className === 'checkbox') {
        const currentTask = event.target.parentElement.parentElement;
        todoTasks[currentTask.id].completed = !todoTasks[currentTask.id].completed;
        LocalStorage.set(todoTasks);
        event.target.parentElement.classList.toggle('completed');
      }
    });
  };
}