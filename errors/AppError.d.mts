/**
 * Custom Application Error Class
 * Handles all application-specific errors with proper status codes and error codes
 */
export declare class AppError extends Error {
    statusCode: number;
    code: string;
    details?: Record<string, any> | undefined;
    constructor(statusCode: number, message: string, code?: string, details?: Record<string, any> | undefined);
}
/**
 * Standard Error Codes
 */
export declare const ErrorCodes: {
    readonly INVALID_INPUT: "INVALID_INPUT";
    readonly VALIDATION_ERROR: "VALIDATION_ERROR";
    readonly NOT_FOUND: "NOT_FOUND";
    readonly UNAUTHORIZED: "UNAUTHORIZED";
    readonly FORBIDDEN: "FORBIDDEN";
    readonly DUPLICATE_ENTRY: "DUPLICATE_ENTRY";
    readonly DB_ERROR: "DB_ERROR";
    readonly INTERNAL_ERROR: "INTERNAL_ERROR";
    readonly CONFLICT: "CONFLICT";
    readonly UNPROCESSABLE_ENTITY: "UNPROCESSABLE_ENTITY";
};
export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
/**
 * Helper functions for common errors
 */
export declare const createError: {
    notFound: (resource: string, details?: Record<string, any>) => AppError;
    unauthorized: (message?: string, details?: Record<string, any>) => AppError;
    forbidden: (message?: string, details?: Record<string, any>) => AppError;
    badRequest: (message: string, details?: Record<string, any>) => AppError;
    validation: (message: string, details?: Record<string, any>) => AppError;
    duplicate: (field: string, value: any, details?: Record<string, any>) => AppError;
    database: (message: string, details?: Record<string, any>) => AppError;
    internal: (message?: string, details?: Record<string, any>) => AppError;
};
/**
 * Check if error is AppError
 */
export declare const isAppError: (error: unknown) => error is AppError;
//# sourceMappingURL=AppError.d.mts.map