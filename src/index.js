/* eslint-disable no-plusplus */
import './style.css';
import { todoTasks, todoContainer, clearAllCompletedBtn } from './modules/variables.js';
import Actions from './modules/actions.js';

todoTasks.push({
  index: 0,
  description: 'ddfgdfgdfgfg',
});

// On page load render the dynamically created list of tasks in the dedicated placeholder.
window.addEventListener('load', () => {
  Actions.displayTasks(todoTasks);
});