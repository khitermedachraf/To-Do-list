import LocalStorage from './localStorage.js';

export const todos = LocalStorage.get() || [];
export const todoList = document.getElementById('todo-list');
export const clearList = document.querySelector('.clear-list');