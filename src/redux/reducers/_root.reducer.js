import { combineRecucers } from 'redux';
//Reducers
import getHomePageReducer from './getHomePage.reducer';
import getDetailsReducer from './getDetails.reducer';
import putDetailsReducer from './putDetails.reducer';
import putTitleReducer from './putTitle.reducer';
import putDescriptionReducer from './putDescription.reducer';
//combineReducers
const rootReducer = combineRecucers({
    getHomePageReducer,
    getDetailsReducer,
    putDetailsReducer,
    putTitleReducer,
    putDescriptionReducer,
})
export default rootReducer;
