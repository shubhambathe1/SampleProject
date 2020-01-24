/** AIP CONFIGURATIONS */

// const BASE_URL = "https://api.eftapme.com/tccustapi/";

// EURONET APIs
export const USER_LOGIN = `customerLogin`;
export const USER_REGISTRATION = `CustomerRegistration`;
export const VERIFY_OTP = `VerifyOtp`;
export const FORGOT_USER_PIN = `forgotPassword`;
export const FETCH_CUSTOMER_DETAILS = `fetchCustomerDetails`;
export const FETCH_CUSTOMER_PROFILE = `fetchCustomerProfile`;
export const CARD_STATUS_MANAGEMENT = `cardStatusManagement`;
export const PIN_MANAGEMENT = `pinManagement`;
export const CARD_TRANSACTION = `cardTransaction`;
export const KEY_EXCHANGE_API = `Customer/keyExchange`;
export const CUSTOMER_REQUEST_API = `Customer/request`;

//DREAMFOLKS APIs
const DREAMFOLKS_BASE_URL = 'https://dev.v2.dreamfolks.in/api/';

export const GET_AIRPORT_LIST = DREAMFOLKS_BASE_URL + `getairports`;
export const GET_OUTLET_LIST = DREAMFOLKS_BASE_URL + `getoutlet`;
export const GET_VOUCHER = DREAMFOLKS_BASE_URL + `getvoucher`;
