import { STORE_CUSTOMER_CARD_DETAILS } from '../actions/actionTypes';

const initialState = {
  customerCardDetails: {
    maskedCardNumber: 'default cardnumber',
    cardStatus: 'default cardstatus',
    productName: 'default productname',
    expiryDate: 'default expirydate',
    activationDate: 'default activationdate',
    currentBalance: 'default currentbalance',
    currencyCode: 'default currencycode',
    cardToken: 'default cardtoken'
  }
}

export default storeCustomerCardDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CUSTOMER_CARD_DETAILS:
      return {
        ...state,
        customerCardDetails: action.customerCardDetails
      }
  }
  return state;
}
