/* eslint-disable no-plusplus */
import './style.css';

const todoTasks = [
  {
    index: 0,
    description: 'oneoneoneoneoneone',
    completed: false,
  },
  {
    index: 1,
    description: 'twotwotwotwotwotwo',
    completed: false,
  },
  {
    index: 2,
    description: 'threethreethreethreethreethree',
    completed: false,
  },
];

const todoList = document.getElementById('todo-list');

const displayTasks = (todoTasks) => {
  for (let i = 0; i < todoTasks.length; i++) {
    let task;
    task.innerHTML = `
    <li>
    <div>
      <input
        type="checkbox"
        id="task${todoTasks[i].index}"
        name="task${todoTasks[i].index}"
        value="task${todoTasks[i].index}"
        class="checkbox"
      />
      <label for="task${todoTasks[i].index}">task${todoTasks[i].description}</label>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
    >
      <path
        fill="grey"
        d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
      />
    </svg>
    </li>
    `;
  }
};