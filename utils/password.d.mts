/**
 * Password Utility Functions
 * Hash and verify passwords using bcrypt
 */
/**
 * Hash a password
 */
export declare const hashPassword: (password: string) => Promise<string>;
/**
 * Verify a password against a hash
 */
export declare const verifyPassword: (password: string, hash: string) => Promise<boolean>;
//# sourceMappingURL=password.d.mts.map