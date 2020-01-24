import { STORE_USER_LOGIN_DATA } from '../actions/actionTypes';

const initialState = {
  userLoginData: {
    deviceID: 'default device',
    customerID: 'default customerid',
    customerName: 'default customername',
    lastLoginDate: 'default lastlogindate',
  }
}

export default storeUserLoginDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_LOGIN_DATA:
      return {
        ...state,
        userLoginData: action.userLoginData
      }
  }
  return state;
}
