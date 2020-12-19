import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView60186776Saga from '../features/CalendarView60186776/redux/sagas';
import CalendarView61186775Saga from '../features/CalendarView61186775/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView60186776Saga,
CalendarView61186775Saga,
    
  ]);
}