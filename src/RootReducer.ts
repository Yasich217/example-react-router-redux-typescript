import {combineReducers} from 'redux';
import {mainPageReducer} from 'Pages/Main/Reducers/MainPageReducer';

const rootReducer = combineReducers({
  //Сюда добавляются необходимые редюсеры...
  mainPage: mainPageReducer
});

export {
  rootReducer
};
