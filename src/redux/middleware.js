import { ADD_TODO } from "./actions";
import { takeEvery } from "@redux-saga/core/effects";

export function* addTodo() {
  yield takeEvery(ADD_TODO, function* () {
    //we can perform async operation
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield* addTodo();
}
