const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  // Send the error response;
  res.status(statusCode).json({
    error: {
      status: statusCode,
      msg: err.message
    }
  })
}

module.exports = errorHandler;