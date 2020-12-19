import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView52186784Saga from '../features/CalendarView52186784/redux/sagas';
import CalendarView53186783Saga from '../features/CalendarView53186783/redux/sagas';
import CalendarView54186782Saga from '../features/CalendarView54186782/redux/sagas';
import CalendarView55186781Saga from '../features/CalendarView55186781/redux/sagas';
import CalendarView56186780Saga from '../features/CalendarView56186780/redux/sagas';
import CalendarView57186779Saga from '../features/CalendarView57186779/redux/sagas';
import CalendarView58186778Saga from '../features/CalendarView58186778/redux/sagas';
import CalendarView59186777Saga from '../features/CalendarView59186777/redux/sagas';
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
CalendarView52186784Saga,
CalendarView53186783Saga,
CalendarView54186782Saga,
CalendarView55186781Saga,
CalendarView56186780Saga,
CalendarView57186779Saga,
CalendarView58186778Saga,
CalendarView59186777Saga,
CalendarView60186776Saga,
CalendarView61186775Saga,
    
  ]);
}