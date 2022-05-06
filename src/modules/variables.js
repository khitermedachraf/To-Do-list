import LocalStorage from './localStorage.js';

export const todoTasks = LocalStorage.get() || [];
export const todoContainer = document.getElementById('todo-list');
export const clearListBtn = document.querySelector('.clear-list');
export const userTask = document.querySelector('.add-input');
