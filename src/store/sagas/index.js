import { all } from 'redux-saga/effects';

import todo from './todo';

export default function* rootSaga() {
  return yield all([todo]);
}
