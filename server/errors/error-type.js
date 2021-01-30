let ErrorType = {

     GENERAL_ERROR :
      {id: 1,
       httpCode: 600,
       message : "an error has occurred please retry again later", 
       isShowStackTrace: true},
     UNAUTHORIZED : 
      {id: 2, 
      httpCode: 401, 
      message : "Login failed, invalid user name or password", 
      isShowStackTrace: false},
     EMAIL_ALREADY_TAKEN: {
        id: 3,
        httpCode: 601,
        message: "Email is already taken",
        isShowStackTrace: false,
      },
     USER_ALREADY_EXISTS_BY_ID: {
        id: 4,
        httpCode: 602,
        message: "this ID is already in use",
        isShowStackTrace: false,
      },
     INVALID_IS_CHECKED_OUT_VALUE: {
        id: 8,
        httpCode: 603,
        message: "Sending incorrect values is forbidden",
        isShowStackTrace: false,
      },
     PRODUCT_ALREADY_EXISTS: {
        id: 6,
        httpCode: 604,
        message: "The product already exists by name",
        isShowStackTrace: false,
      },
     DATE_UNAVAILABLE: {
        id: 7,
        httpCode: 605,
        message: "The picked date is unavailable",
        isShowStackTrace: false,
      },
     INVALID_NUMBER_OF_LAST_DIGITS: {
        id: 8,
        httpCode: 606,
        message: "The last 4 digits of the credit card are required to proceed",
        isShowStackTrace: false,
      },
     INVALID_TYPE_OF_LAST_DIGITS: {
        id: 9,
        httpCode: 607,
        message: "The last 4 digits of the credit card must all be numeric",
        isShowStackTrace: false,
      }
}

module.exports = ErrorType;
