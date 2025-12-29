import { Router } from "express";
import { login } from "../controller/auth.mjs";
import { loginSchema, validateRequest } from "../validators/schemas.js";
import { ResponseFactory } from "../utils/response.mjs";
import { logger } from "../utils/logger.mjs";
import { isAppError } from "../errors/AppError.mjs";
const authRouter = Router();
/**
 * POST /auth/login
 * Login with username and password
 */
authRouter.post("/login", async (req, res) => {
    try {
        // Validate request body
        const validation = await validateRequest(loginSchema, req.body);
        if (!validation.success) {
            return res
                .status(400)
                .json(ResponseFactory.badRequest(validation.error || "Invalid input"));
        }
        if (!validation.data?.username || !validation.data?.password) {
            return res
                .status(400)
                .json(ResponseFactory.badRequest("Invalid credentials"));
        }
        const { username, password } = validation.data;
        // Call login controller
        const user = await login(username, password);
        res.status(200).json(ResponseFactory.success(user, "LOGIN_SUCCESS", 200));
    }
    catch (error) {
        if (isAppError(error)) {
            logger.warn("Login failed", { code: error.code, message: error.message });
            return res
                .status(error.statusCode)
                .json(ResponseFactory.error(error.message, error.statusCode));
        }
        logger.error("Login error", error instanceof Error ? error : new Error(String(error)));
        res.status(500).json(ResponseFactory.serverError());
    }
});
export default authRouter;
//# sourceMappingURL=auth.mjs.map