function ErrorHandler(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;

  // capture stack trace for debugging (like in class)
  Error.captureStackTrace(error, ErrorHandler);

  return error;
}

module.exports = ErrorHandler;
