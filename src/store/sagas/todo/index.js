import { put, takeEvery, all } from 'redux-saga/effects';

import { Creators as TodoActions } from '../../ducks/todos';

export function* addTodoAsync({ text }) {
  try {
    yield put(TodoActions.addTodo(text));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeEvery('DISPATCH_TODO', addTodoAsync)]);
