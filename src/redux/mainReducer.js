import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView54186782Reducer from '../features/CalendarView54186782/redux/reducers';
import CalendarView55186781Reducer from '../features/CalendarView55186781/redux/reducers';
import CalendarView56186780Reducer from '../features/CalendarView56186780/redux/reducers';
import CalendarView57186779Reducer from '../features/CalendarView57186779/redux/reducers';
import CalendarView58186778Reducer from '../features/CalendarView58186778/redux/reducers';
import CalendarView59186777Reducer from '../features/CalendarView59186777/redux/reducers';
import CalendarView60186776Reducer from '../features/CalendarView60186776/redux/reducers';
import CalendarView61186775Reducer from '../features/CalendarView61186775/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView54186782: CalendarView54186782Reducer,
CalendarView55186781: CalendarView55186781Reducer,
CalendarView56186780: CalendarView56186780Reducer,
CalendarView57186779: CalendarView57186779Reducer,
CalendarView58186778: CalendarView58186778Reducer,
CalendarView59186777: CalendarView59186777Reducer,
CalendarView60186776: CalendarView60186776Reducer,
CalendarView61186775: CalendarView61186775Reducer,

});