import { STORE_KEY_EXCHANGE_API_DETAILS } from '../actions/actionTypes';

const initialState = {
    keyExchangeApiData: {
        responseCode: 'default response code',
        responseMsg: 'default message',
        servercombinationkey: 'default servercombinationkey',
        clientCombionationKey: 'default clientcombinationkey',
        iv: 'default iv',
        salt: 'default salt',
        urlList: {
            tc_fetchCustomerProfile: 'default tc_fetchCustomerProfile',
            tc_forgotPassword: 'default tc_forgotPassword',
            tc_fetchCustomerDetails: 'defalt tc_fetchCustomerDetails',
            tc_pinManagement: 'default tc_pinManagement',
            tc_cardTransaction: 'default tc_cardTransaction',
            tc_customerLogin: 'default tc_customerLogin',
            tc_locateBranch: 'default tc_locateBranch',
            tc_SecurityQuestion: 'default tc_SecurityQuestion',
            tc_customerRegistration: 'default tc_customerRegistration',
            tc_cardStatusManagement: 'default tc_cardStatusManagement',
            tc_RegenerateOtp: 'default tc_RegenerateOtp',
            tc_VerifyOtp: 'default tc_VerifyOtp'
        }
    }
}

export default storeKeyExchangeApiDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_KEY_EXCHANGE_API_DETAILS:
            return {
                ...state,
                keyExchangeApiData: action.keyExchangeApiData
            }
    }
    return state;
}
