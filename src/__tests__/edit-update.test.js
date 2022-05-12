/**
 * @jest-environment jsdom
 */

import Actions from '../modules/actions.js';
import TaskStatus from '../modules/taskStatus.js';

document.body.innerHTML = '<span id="todo-box"></span>';

describe('test the edit description function', () => {
  test('should edit the  description of the task', () => {
    // Arrange
    const task1 = {
      id: 1,
      description: 'task1',
      completed: false,
    };

    // Act
    // the addTask function returns the new array from localStorage which is empty initially
    Actions.addTask(task1);
    const userTask = { value: 'task 1 edited' };
    const editTask = Actions.editTask(task1.id - 1, userTask);
    // Assert
    expect(editTask[0].description).toEqual('task 1 edited');
  });
});
