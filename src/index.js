/* eslint-disable no-plusplus */
import './style.css';

const todoTasks = [
  {
    index: 0,
    description: 'zerozerozerozero',
    completed: false,
  },
  {
    index: 1,
    description: 'oneoneoneoneoneone',
    completed: true,
  },
  {
    index: 2,
    description: 'twotwotwotwotwotwo',
    completed: true,
  },
  {
    index: 3,
    description: 'threethreethreethree',
    completed: false,
  },
];

const todoList = document.getElementById('todo-list');

// Write a function to iterate over the tasks array and
// populate an HTML list item element for each task.
const displayTasks = (todoTasks) => {
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
    >
      <path
        fill="grey"
        d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
      />
    </svg>
    `;
    todoList.appendChild(task);
  }
};

// On page load render the dynamically created list of tasks in the dedicated placeholder.
window.addEventListener('load', () => {
  displayTasks(todoTasks);
});