import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView59186777Reducer from '../features/CalendarView59186777/redux/reducers';
import CalendarView60186776Reducer from '../features/CalendarView60186776/redux/reducers';
import CalendarView61186775Reducer from '../features/CalendarView61186775/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView59186777: CalendarView59186777Reducer,
CalendarView60186776: CalendarView60186776Reducer,
CalendarView61186775: CalendarView61186775Reducer,

});