const errorHandler = (err, req, res, next) => {
  let message;
  let code;

  switch (err.name) {
    case "requiredValidationError":
      code = 400;
      message = "Field cannot be empty";
      break;

    case "usernameUniqueValidationError":
      code = 400;
      message = "Username already registered";
      break;

    case "emailUniqueValidationError":
      code = 400;
      message = "Email already registered";
      break;

    case "unauthorized":
      code = 401;
      message = "Invalid user / email or password";
      break;

    case "JsonWebTokenError":
    case "invalidToken":
      code = 401;
      message = "Invalid access token";
      break;

    case "notLoggedIn":
      code = 401;
      message = "Please login first";
      break;

    case "collectionNameEmpty":
      code = 401;
      message = "Collection name cannot be empty";
      break;

    case "collectionIdEmpty":
      code = 401;
      message = "Collection id cannot be empty";
      break;

    case "resultFieldEmpty":
      code = 401;
      message = "Result field cannot be empty";
      break;

    case "noFile":
      code = 400;
      message = "You need to input the file";
      break;

    case "wrongFileType":
      code = 400;
      message = "File type needs to be application/json";
      break;

    case "userDoesNotExist":
      code = 404;
      message = "There is no user registered with that email";
      break;

    case "emailFailed":
      code = 401;
      message = "Sending email failed";
      break;

    case "tokenExpired":
      code = 401;
      message = "Password reset token is invalid or has expired";
      break;

    case "historyFieldEmpty":
      code = 401;
      message = "url or method cannot be empty";
      break;

    default:
      code = 500;
      message = "Internal Server Error";
      break;
  }

  res.status(code).json({
    message: message,
  });
};

module.exports = errorHandler;
