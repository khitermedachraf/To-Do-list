/**
 * @jest-environment jsdom
 */

import Actions from '../modules/actions.js';

document.body.innerHTML = '<span id="todo-box"></span>';

const task2 = jest.fn({
  id: 2,
  description: 'task3',
  completed: false,
});

describe('test the Add item function', () => {
  test('should create new items to test the localStorage and the Dom', () => {
    // Arrange
    const task1 = jest.fn({
      id: 1,
      description: 'task3',
      completed: false,
    });

    // Act
    Actions.addTask(task1);
    // the addTask function returns the new array from localStorage which is empty initially
    const addTask = Actions.addTask(task2);
    // Assert
    expect(addTask).toHaveLength(2);
  });
});

describe('test the dekete item function', () => {
  test('should delete an item from the localStorage and the Dom', () => {
    // Act
    // Actions.removeTask(task2);
    // the addTask function returns the new array from localStorage which is empty initially
    const removeTask = Actions.removeTask(task2);
    // Assert
    expect(removeTask).toHaveLength(1);
  });
});
