import { combineReducers } from 'redux';
import cityInfoReducer from './components/CityInfo/cityInfoReducer';
import searchReducer from './components/Search/searchReducer';
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer'

const rootReducer = combineReducers({
// add reducers
    info: cityInfoReducer,
    search: searchReducer,
    history: searchHistoryReducer
});

export default rootReducer;
