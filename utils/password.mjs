/**
 * Password Utility Functions
 * Hash and verify passwords using bcrypt
 */
import bcrypt from "bcrypt";
const SALT_ROUNDS = 10;
/**
 * Hash a password
 */
export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        return hashedPassword;
    }
    catch (error) {
        throw new Error(`Failed to hash password: ${error instanceof Error ? error.message : String(error)}`);
    }
};
/**
 * Verify a password against a hash
 */
export const verifyPassword = async (password, hash) => {
    try {
        const isValid = await bcrypt.compare(password, hash);
        return isValid;
    }
    catch (error) {
        throw new Error(`Failed to verify password: ${error instanceof Error ? error.message : String(error)}`);
    }
};
//# sourceMappingURL=password.mjs.map