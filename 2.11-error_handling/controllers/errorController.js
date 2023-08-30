'use strict';

const httpStatus = require('http-status-codes');

exports.logErrors = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
}

exports.respondNoResourceFound = (req, res) => {
    const errorCode = httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.sendFile(`./public/${errorCode}.html`, {
        root: './'
    });
}

exports.respondInternalError = (req, res) => {
    const errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
}