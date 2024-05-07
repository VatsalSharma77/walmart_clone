const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  const extra = err.extra || "Error occured";

  return res.status(statusCode).json({ message, extra });
};

module.exports = errorHandler;
