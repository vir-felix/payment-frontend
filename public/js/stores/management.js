'use strict';

var actionTypes = require('constants/action-types');

export default function management(state, action) {
  console.log('management store: got action', action);

  if (action.type === actionTypes.APP_ERROR) {
    return {
      loading: false,
      error: {
        debugMessage: action.error.debugMessage,
      },
    };
  }

  if (action.type === actionTypes.GET_PAY_METHODS) {
    return {
      loading: false,
      paymentMethods: action.management.paymentMethods,
    };
  }

  if (action.type === actionTypes.CLOSE_MODAL) {
    return {
      loading: false,
      error: null,
      paymentMethods: null,
    };
  }


  return state || {
    error: null,
    loading: false,
    paymentMethods: null,
  };
}
