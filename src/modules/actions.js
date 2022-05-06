/* eslint-disable no-plusplus */
import {
  todoTasks, userTask, clearAllCompletedBtn, todoContainer,
} from './variables.js';
import Task from './task.js';
import LocalStorage from './localStorage.js';

export default class Actions {
  /*  display todo tasks from the localstorage
  Write a function to iterate over the tasks array and
  populate an HTML list item element for each task. */

  static displayTasks = (todoTasks) => {
    for (let i = 0; i < todoTasks.length; i++) {
      const task = document.createElement('li');
      task.innerHTML = `
      <div>
        <input
          type="checkbox"
          id="task${todoTasks[i].index}"
          name="task${todoTasks[i].index}"
          value="task${todoTasks[i].index}"
          class="checkbox"
        />
        <label for="task${todoTasks[i].index}">${todoTasks[i].description}</label>
      </div>
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
      `;
      todoContainer.insertBefore(task, clearAllCompletedBtn);
    }
  };
}
