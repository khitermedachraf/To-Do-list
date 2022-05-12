/**
 * @jest-environment jsdom
 */

import Actions from '../modules/actions.js';

document.body.innerHTML = '<span id="todo-box"></span>';

describe('test the Add item function', () => {
  test('should create new items to test localStorage the Dom', () => {
    // Arrange
    const task = jest.fn({
      id: 3,
      description: 'task3',
      completed: false,
    });

    // Act
    Actions.addTask(task);
    // the addTask function returns the new array from localStorage which is empty initially
    const addTask = Actions.addTask(task);
    // Assert
    expect(addTask).toHaveLength(2);
  });
});
