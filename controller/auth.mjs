import DB from "../db/db.mjs";
import { hashPassword } from "../utils/password.mjs";
import { createError, AppError } from "../errors/AppError.mjs";
import { logger } from "../utils/logger.mjs";
/**
 * Login user with username and password
 */
export const login = async (username, password) => {
    try {
        if (!username || !password) {
            throw createError.badRequest("Username and password are required");
        }
        const user = await DB.client.findFirst({
            where: { Username: username, deletedAt: null },
            include: { Team: { where: { deletedAt: null } } },
        });
        if (!user) {
            logger.warn("Login attempt with non-existent username", { username });
            throw createError.unauthorized("Invalid credentials");
        }
        const isPasswordValid = password == user.Password;
        // const isPasswordValid = await verifyPassword(password, user.Password);
        if (!isPasswordValid) {
            logger.warn("Login attempt with invalid password", { username });
            throw createError.unauthorized("Invalid credentials");
        }
        logger.info("User logged in successfully", { userId: user.id, username });
        // Return user data without password
        const { Password: _, ...sendUser } = user;
        return sendUser;
    }
    catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        logger.error("Login failed", error instanceof Error ? error : new Error(String(error)), {
            username,
        });
        throw createError.internal("Login failed");
    }
};
/**
 * Create a new user (for registration)
 */
export const createUser = async (userData) => {
    try {
        // Check if username exists
        const existingUser = await DB.client.findFirst({
            where: { Username: userData.Username },
        });
        if (existingUser) {
            throw createError.duplicate("Username", userData.Username);
        }
        // Check if phone exists
        const existingPhone = await DB.client.findFirst({
            where: { Phone: userData.Phone },
        });
        if (existingPhone) {
            throw createError.duplicate("Phone", userData.Phone);
        }
        // Hash password
        const hashedPassword = await hashPassword(userData.Password);
        // Create user
        const newUser = await DB.client.create({
            data: {
                ...userData,
                Password: hashedPassword,
            },
        });
        logger.info("New user created", {
            userId: newUser.id,
            username: newUser.Username,
        });
        // Return without password
        const { Password: _, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    }
    catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        logger.error("User creation failed", error instanceof Error ? error : new Error(String(error)), {
            username: userData.Username,
        });
        throw createError.database("Failed to create user");
    }
};
//# sourceMappingURL=auth.mjs.map