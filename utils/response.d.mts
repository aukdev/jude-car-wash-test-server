/**
 * Response Factory
 * Provides helper methods to create consistent API responses
 */
import type { HttpStatus } from "../const/http-server-config.mjs";
export interface ApiResponse<T = unknown> {
    message: string;
    status: HttpStatus;
    data?: T;
    error?: string;
}
export declare class ResponseFactory {
    /**
     * Create a success response
     */
    static success<T = undefined>(data?: T, message?: string, status?: HttpStatus): ApiResponse<T | undefined>;
    /**
     * Create a created response (201)
     */
    static created<T>(data: T, message?: string): ApiResponse<T>;
    /**
     * Create an error response
     */
    static error(message: string, status?: HttpStatus, error?: string): ApiResponse;
    /**
     * Create a bad request error response
     */
    static badRequest(message: string, error?: string): ApiResponse;
    /**
     * Create an unauthorized error response
     */
    static unauthorized(message?: string): ApiResponse;
    /**
     * Create a not found error response
     */
    static notFound(message?: string): ApiResponse;
    /**
     * Create a server error response
     */
    static serverError(message?: string): ApiResponse;
}
//# sourceMappingURL=response.d.mts.map