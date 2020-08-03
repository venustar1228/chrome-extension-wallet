export const HARMONY_REQUEST_TYPE = "TO_ONEWALLET_EXTENSION";
export const HARMONY_RESPONSE_TYPE = "FROM_ONEWALLET_EXTENSION";

export const STAKINGTYPE = {
  DELEGATE: 2,
  UNDELEGATE: 3,
  WITHDRAWREWARD: 4,
};
export const FACTORYTYPE = {
  TRANSACTION: "TRANSACTION",
  STAKINGTRANSACTION: "STAKINGTRANSACTION",
};
export const TRANSACTIONTYPE = {
  SEND: "SEND",
  DELEGATE: "DELEGATE",
  UNDELEGATE: "UNDELEGATE",
  WITHDRAWREWARD: "WITHDRAWREWARD",
};
export const TRANSACTIONCLASS = {
  TRANSACTION: "Transaction",
  STAKINGTRANSACTION: "StakingTransaction",
};

export const ONEWALLET_SERVICE_EVENT_REQUEST =
  "ONEWALLET_SERVICE_EVENT_REQUEST";
export const ONEWALLET_SERVICE_EVENT_RESPONSE =
  "ONEWALLET_SERVICE_EVENT_RESPONSE";

//request type
export const THIRDPARTY_FORGET_IDENTITY_REQUEST =
  "THIRDPARTY_FORGET_IDENTITY_REQUEST";
export const THIRDPARTY_GET_ACCOUNT_REQUEST = "THIRDPARTY_GET_ACCOUNT_REQUEST";
export const THIRDPARTY_SIGN_REQUEST = "THIRDPARTY_SIGN_REQUEST";

//response type
export const THIRDPARTY_SIGNATURE_KEY_SUCCESS_RESPONSE =
  "THIRDPARTY_SIGNATURE_KEY_SUCCESS_RESPONSE";
export const THIRDPARTY_FORGET_IDENTITY_REQUEST_RESPONSE =
  "THIRDPARTY_FORGET_IDENTITY_REQUEST_RESPONSE";
export const THIRDPARTY_GET_ACCOUNT_SUCCESS_RESPONSE =
  "THIRDPARTY_GET_ACCOUNT_SUCCESS_RESPONSE";
export const THIRDPARTY_GET_ACCOUNT_REQUEST_RESPONSE =
  "THIRDPARTY_GET_ACCOUNT_REQUEST_RESPONSE";
export const THIRDPARTY_SIGN_REQUEST_RESPONSE =
  "THIRDPARTY_SIGN_REQUEST_RESPONSE";
export const GET_WALLET_SERVICE_STATE = "GET_WALLET_SERVICE_STATE";
export const THIRDPARTY_SIGN_CONNECT = "THIRDPARTY_SIGN_CONNECT";
export const THIRDPARTY_GET_ACCOUNT_CONNECT = "THIRDPARTY_GET_ACCOUNT_CONNECT";

//window state
export const FROM_BACK_TO_POPUP = "FROM_BACK_TO_POPUP";
export const CLOSE_WINDOW = "CLOSE_WINDOW";

//wallet provider messages
export const LOGIN_REJECT = "User rejected login request";
export const SIGN_REJECT = "User rejected sign transaction request";
export const SIGNOUT_SUCCEED = "Successfully signed out";

export const LEDGER_CONFIRM_PREPARE =
  "Please confirm the transaction on the Ledger";
export const LEDGER_CONFIRM_SUCCESS = "Sign transaction approved by the ledger";
export const LEDGER_CONFIRM_REJECT = "Sign transaction rejected by the ledger";
export const LEDGER_LOCKED =
  "Ledger wallet is locked or Harmony app is not opened.";
