/** COMBINE REDUCER */

import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import storeHeroesListReducer from './storeHeroesListReducer';
import colorsReducer from './colorsReducer';
import storeUserLoginDataReducer from './storeUserLoginDataReducer';
import storeCustomerCardDetailsReducer from './storeCustomerCardDetailsReducer';
import storeKeyExchangeApiDetailsReducer from './storeKeyExchangeApiDetailsReducer';

export default combineReducers({
  counterReducer,
  storeHeroesListReducer,
  colorsReducer,
  storeUserLoginDataReducer,
  storeCustomerCardDetailsReducer,
  storeKeyExchangeApiDetailsReducer
});
