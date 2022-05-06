/* eslint-disable no-plusplus */
import './style.css';
import {
  todoTasks, todoContainer, clearAllCompletedBtn, userTask,
} from './modules/variables.js';
import Actions from './modules/actions.js';
import Task from './modules/task.js';

// On page load render the dynamically created list of tasks in the dedicated placeholder.
window.addEventListener('load', () => {
  Actions.displayTasks(todoTasks);
});

// populate the localStorage and the To-do List when the user press Enter
userTask.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && userTask.value) {
    event.preventDefault();
    const task = new Task(userTask);
    Actions.addTask(task);
    Actions.displayTasks(todoTasks);
    userTask.value = '';
  }
});

todoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash')) {
    userTask.value = '';
    const currentId = e.target.parentElement.parentElement.parentElement.id;
    Actions.removeTask(currentId);
    Actions.displayTasks(todoTasks);
  }
});