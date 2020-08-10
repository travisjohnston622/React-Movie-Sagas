import { combineRecucers } from 'redux';
//Reducers
import getHomePageReducer from './getHomePage.reducer';
import getDetailsReducer from './getDetails.reducer';
import editDetailsReducer from './editDetails.reducer';
import putTitleReducer from './putTitle.reducer';
import putDescriptionReducer from './putDescription.reducer';
//combineReducers
const rootReducer = combineRecucers({
    getHomePageReducer,
    getDetailsReducer,
    editDetailsReducer,
    putTitleReducer,
    putDescriptionReducer,
})
export default rootReducer;
