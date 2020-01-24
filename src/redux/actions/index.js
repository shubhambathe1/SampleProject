import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  FETCH_HEROES_LIST,
  // GET_COLOR,
  STORE_USER_LOGIN_DATA,
  STORE_CUSTOMER_CARD_DETAILS,
  STORE_KEY_EXCHANGE_API_DETAILS,
} from './actionTypes';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
})

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
})

// export const getColor = colors => {
//     return {
//         type: GET_COLOR,
//         colors: colors
//     };
// };

export const fetchHeroesList = heroesList => {
  return {
    type: FETCH_HEROES_LIST,
    heroesList: heroesList
  };
};

export const storeUserLoginData = userLoginData => {
  return {
    type: STORE_USER_LOGIN_DATA,
    userLoginData: userLoginData
  };
};

export const storeCustomerCardDetails = customerCardDetails => {
  return {
    type: STORE_CUSTOMER_CARD_DETAILS,
    customerCardDetails: customerCardDetails
  };
};

export const storeKeyExchangeApiDetails = keyExchangeApiData => {
  return {
    type: STORE_KEY_EXCHANGE_API_DETAILS,
    keyExchangeApiData: keyExchangeApiData
  };
};
