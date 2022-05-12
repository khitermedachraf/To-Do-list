/* eslint-disable no-plusplus */
import {
  todoTasks, userTask, todoContainer,
} from './variables.js';
import LocalStorage from './localStorage.js';
import Helpers from './helpers.js';

export default class Actions {
  /*  display todo tasks from the localstorage
  Write a function to iterate over the tasks array and
  populate an HTML list item element for each task. */
  static displayTasks = (todoTasks) => {
    todoContainer.innerHTML = '';
    for (let i = 0; i < todoTasks.length; i++) {
      const task = document.createElement('li');
      task.setAttribute('id', `${i}`);
      task.setAttribute('class', 'item');
      task.innerHTML = `
      <div class="${todoTasks[i].completed ? 'completed' : ''} label-Container">
        <input
          type="checkbox"
          class="checkbox"
          ${todoTasks[i].completed ? 'checked' : ''}
        />
        <label class="description">${todoTasks[i].description}</label>
      </div>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
          class="trash"
            fill="grey"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          />
        </svg>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="three-dots"
      >
        <path
          fill="grey"
          d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </span>
      `;
      todoContainer.appendChild(task);
    }
  };

  // add a task to both the to-do tasks' array and the localstorage
  static addTask = (task) => {
    if (!task) return null;
    todoTasks.push(task);
    LocalStorage.set(todoTasks);
    return todoTasks;
  };

  // remove a task from both the to-do tasks' array and the localstorage
  static removeTask = (taskId) => {
    todoTasks.splice(taskId, 1);
    Helpers.updateIndex();
    LocalStorage.set(todoTasks);
  };

  // edit a task in both the to-do tasks' array and  the localstorage
  static editTask = (editId) => {
    todoTasks[editId].description = userTask.value;
    LocalStorage.set(todoTasks);
    Actions.displayTasks(todoTasks);
    userTask.value = '';
  };
}
