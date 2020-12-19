import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView60186776Reducer from '../features/CalendarView60186776/redux/reducers';
import CalendarView61186775Reducer from '../features/CalendarView61186775/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView60186776: CalendarView60186776Reducer,
CalendarView61186775: CalendarView61186775Reducer,

});