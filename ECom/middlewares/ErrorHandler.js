const path = require("path");
const ErrorHandler = (error, req, res, next) => {
  console.log("Middleware Error handling");

  const errorStatus = error.statusCode || 500;

  const errorMessage = error.message || "Something went wrong";

  resizeBy.status(errorStatus).json({
    success: false,
    message: errorMessage,
    statusCode: errorStatus,
  });

  // res.sendFile(path.join(__dirname + "./../views/Error.html"));
};

module.exports = ErrorHandler;
