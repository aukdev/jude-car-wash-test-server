/**
 * Express Middleware Functions
 */
import {} from "express";
import { AppError, isAppError } from "../errors/AppError.mjs";
import { logger } from "../utils/logger.mjs";
import { ResponseFactory } from "../utils/response.mjs";
/**
 * Error Handling Middleware
 * Must be registered LAST in middleware chain
 */
export const errorHandler = (err, _req, res, _next) => {
    // Log the error
    if (err instanceof Error) {
        logger.error("Unhandled error", err, {
            url: _req.path,
            method: _req.method,
        });
    }
    else {
        logger.error("Unknown error", String(err));
    }
    // Handle AppError
    if (isAppError(err)) {
        return res
            .status(err.statusCode)
            .json(ResponseFactory.error(err.message, err.statusCode));
    }
    // Handle other errors
    res.status(500).json(ResponseFactory.serverError());
};
/**
 * Request Logging Middleware
 */
export const requestLogger = (req, _res, next) => {
    logger.info(`${req.method} ${req.path}`, {
        query: req.query,
        params: req.params,
    });
    next();
};
/**
 * Not Found Middleware
 */
export const notFoundHandler = (_req, res) => {
    res.status(404).json(ResponseFactory.notFound("Endpoint not found"));
};
//# sourceMappingURL=error-handler.mjs.map