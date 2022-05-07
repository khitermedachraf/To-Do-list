/* eslint-disable no-plusplus */
import './style.css';
import {
  todoTasks, todoContainer, userTask,
} from './modules/variables.js';
import Actions from './modules/actions.js';
import Task from './modules/task.js';
import TaskStatus from './modules/taskStatus.js';

let editId;
let isEditedTask = false;
// On page load render the dynamically created list of tasks in the dedicated placeholder.
window.addEventListener('load', () => {
  Actions.displayTasks(todoTasks);
});

// populate the localStorage and the To-do List when the user press Enter
userTask.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && userTask.value) {
    if (!isEditedTask) { // is isEditedTask is not true
      event.preventDefault();
      const task = new Task(userTask);
      Actions.addTask(task);
      Actions.displayTasks(todoTasks);
      userTask.value = '';
    } else { // is isEditedTask is true, so we are editing the task
      Actions.editTask(editId);
      isEditedTask = false;
    }
  }
});

//  Create the logic of delete and edit tasks
todoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash')) {
    // Implement the functionality for deleting a task
    userTask.value = '';
    const currentId = e.target.parentElement.parentElement.parentElement.id;
    Actions.removeTask(currentId);
    Actions.displayTasks(todoTasks);
  } else if (e.target.classList.contains('description')) {
    // Implement the functionality for editing a task
    userTask.focus();
    // Iterate throw list items to setback the initial background color
    const allLi = todoContainer.childNodes;
    for (let i = 0; i < allLi.length; i++) {
      allLi[i].style.backgroundColor = 'lightcyan';
    }
    // set the background color of the focuced list item
    e.target.parentElement.parentElement.style.backgroundColor = 'lightyellow';
    userTask.value = e.target.textContent;
    editId = e.target.parentElement.parentElement.id;
    isEditedTask = true;
  }
});

// toggle the completed status of a todo' tasks
TaskStatus.toggleCompleted();
