/**
 * Response Factory
 * Provides helper methods to create consistent API responses
 */
export class ResponseFactory {
    /**
     * Create a success response
     */
    static success(data, message = "SUCCESS", status = 200) {
        return {
            message,
            status,
            data,
        };
    }
    /**
     * Create a created response (201)
     */
    static created(data, message = "CREATED") {
        return {
            message,
            status: 201,
            data,
        };
    }
    /**
     * Create an error response
     */
    static error(message, status = 500, error) {
        return {
            message,
            status,
            error: error || message,
        };
    }
    /**
     * Create a bad request error response
     */
    static badRequest(message, error) {
        return this.error(message, 400, error);
    }
    /**
     * Create an unauthorized error response
     */
    static unauthorized(message = "Unauthorized") {
        return this.error(message, 401);
    }
    /**
     * Create a not found error response
     */
    static notFound(message = "Not found") {
        return this.error(message, 404);
    }
    /**
     * Create a server error response
     */
    static serverError(message = "Internal server error") {
        return this.error(message, 500);
    }
}
//# sourceMappingURL=response.mjs.map