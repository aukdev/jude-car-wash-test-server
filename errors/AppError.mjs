/**
 * Custom Application Error Class
 * Handles all application-specific errors with proper status codes and error codes
 */
export class AppError extends Error {
    statusCode;
    code;
    details;
    constructor(statusCode, message, code = "INTERNAL_ERROR", details) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.name = "AppError";
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
/**
 * Standard Error Codes
 */
export const ErrorCodes = {
    INVALID_INPUT: "INVALID_INPUT",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    NOT_FOUND: "NOT_FOUND",
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    DUPLICATE_ENTRY: "DUPLICATE_ENTRY",
    DB_ERROR: "DB_ERROR",
    INTERNAL_ERROR: "INTERNAL_ERROR",
    CONFLICT: "CONFLICT",
    UNPROCESSABLE_ENTITY: "UNPROCESSABLE_ENTITY",
};
/**
 * Helper functions for common errors
 */
export const createError = {
    notFound: (resource, details) => new AppError(404, `${resource} not found`, ErrorCodes.NOT_FOUND, details),
    unauthorized: (message = "Unauthorized access", details) => new AppError(401, message, ErrorCodes.UNAUTHORIZED, details),
    forbidden: (message = "Access forbidden", details) => new AppError(403, message, ErrorCodes.FORBIDDEN, details),
    badRequest: (message, details) => new AppError(400, message, ErrorCodes.INVALID_INPUT, details),
    validation: (message, details) => new AppError(400, message, ErrorCodes.VALIDATION_ERROR, details),
    duplicate: (field, value, details) => new AppError(409, `${field} "${value}" already exists`, ErrorCodes.DUPLICATE_ENTRY, { field, value, ...details }),
    database: (message, details) => new AppError(500, message, ErrorCodes.DB_ERROR, details),
    internal: (message = "Internal server error", details) => new AppError(500, message, ErrorCodes.INTERNAL_ERROR, details),
};
/**
 * Check if error is AppError
 */
export const isAppError = (error) => {
    return error instanceof AppError;
};
//# sourceMappingURL=AppError.mjs.map