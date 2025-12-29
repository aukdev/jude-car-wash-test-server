/**
 * Client Controller - Improved with Error Handling
 * Handle client/user related operations
 */
import DB from "../../db/db.mjs";
import { createError, AppError } from "../../errors/AppError.mjs";
import { logger } from "../../utils/logger.mjs";
import { hashPassword } from "../../utils/password.mjs";
import { UserRole } from "../../generated/prisma/client.js";
/**
 * Get all customers with pagination
 */
export const getAllCustomers = async (page, size) => {
    try {
        const offset = (page - 1) * size;
        const [data, count] = await Promise.all([
            DB.client.findMany({
                skip: offset,
                take: size,
                orderBy: { id: "desc" },
                select: {
                    id: true,
                    Name: true,
                    Username: true,
                    Email: true,
                    Phone: true,
                    createdAt: true,
                },
                where: {
                    Role: UserRole.User,
                    deletedAt: null,
                },
            }),
            DB.client.count({
                where: {
                    Role: UserRole.User,
                    deletedAt: null,
                },
            }),
        ]);
        return {
            data,
            count,
            page,
            pageSize: size,
            totalPages: Math.ceil(count / size),
        };
    }
    catch (error) {
        logger.error("Failed to fetch customers", error instanceof Error ? error : new Error(String(error)), {
            page,
            size,
        });
        throw createError.database("Failed to fetch customers");
    }
};
/**
 * Get all staff members with pagination
 */
export const getAllStaff = async (page, size) => {
    try {
        const offset = (page - 1) * size;
        const [data, count] = await Promise.all([
            DB.client.findMany({
                skip: offset,
                take: size,
                orderBy: { id: "desc" },
                select: {
                    id: true,
                    Name: true,
                    Username: true,
                    Email: true,
                    Phone: true,
                    Position: true,
                    createdAt: true,
                },
                where: {
                    Role: UserRole.Team,
                    deletedAt: null,
                },
            }),
            DB.client.count({
                where: {
                    Role: UserRole.Team,
                    deletedAt: null,
                },
            }),
        ]);
        return {
            data,
            count,
            page,
            pageSize: size,
            totalPages: Math.ceil(count / size),
        };
    }
    catch (error) {
        logger.error("Failed to fetch staff", error instanceof Error ? error : new Error(String(error)), {
            page,
            size,
        });
        throw createError.database("Failed to fetch staff");
    }
};
/**
 * Get client by ID
 */
export const getById = async (id) => {
    try {
        const data = await DB.client.findUnique({
            where: { id },
            select: {
                id: true,
                Name: true,
                Phone: true,
                Email: true,
                Address: true,
                Username: true,
                Role: true,
                Position: true,
                createdAt: true,
            },
        });
        if (!data) {
            throw createError.notFound("Client");
        }
        return data;
    }
    catch (error) {
        if (error instanceof AppError)
            throw error;
        logger.error("Failed to fetch client", error instanceof Error ? error : new Error(String(error)), {
            id,
        });
        throw createError.database("Failed to fetch client");
    }
};
/**
 * Create a new client
 */
export const create = async (data) => {
    try {
        // Check if username exists
        const existingUsername = await DB.client.findFirst({
            where: { Username: data.Username },
        });
        if (existingUsername) {
            throw createError.duplicate("Username", data.Username);
        }
        // Check if phone exists
        const existingPhone = await DB.client.findFirst({
            where: { Phone: data.Phone },
        });
        if (existingPhone) {
            throw createError.duplicate("Phone", data.Phone);
        }
        // Hash password
        const hashedPassword = await hashPassword(data.Password);
        const newClient = await DB.client.create({
            data: {
                ...data,
                Password: hashedPassword,
            },
        });
        logger.info("New client created", {
            clientId: newClient.id,
            username: newClient.Username,
        });
        return `Client created successfully with ID ${newClient.id}`;
    }
    catch (error) {
        if (error instanceof AppError)
            throw error;
        logger.error("Failed to create client", error instanceof Error ? error : new Error(String(error)), {
            username: data.Username,
        });
        throw createError.database("Failed to create client");
    }
};
/**
 * Search client by phone
 */
export const searchByPhone = async (phone) => {
    try {
        const data = await DB.client.findFirst({
            where: { Phone: phone },
            select: {
                id: true,
                Name: true,
                Phone: true,
                Email: true,
                Role: true,
            },
        });
        return data || null;
    }
    catch (error) {
        logger.error("Failed to search client by phone", error instanceof Error ? error : new Error(String(error)), {
            phone,
        });
        throw createError.database("Failed to search client");
    }
};
/**
 * Check if username is available
 */
export const checkUsername = async (username) => {
    try {
        const count = await DB.client.count({
            where: { Username: username },
        });
        return count === 0 ? "available" : "taken";
    }
    catch (error) {
        logger.error("Failed to check username", error instanceof Error ? error : new Error(String(error)), {
            username,
        });
        throw createError.database("Failed to check username");
    }
};
/**
 * Check if phone is available
 */
export const checkPhone = async (phone) => {
    try {
        const count = await DB.client.count({
            where: { Phone: phone },
        });
        return count === 0 ? "available" : "taken";
    }
    catch (error) {
        logger.error("Failed to check phone", error instanceof Error ? error : new Error(String(error)), {
            phone,
        });
        throw createError.database("Failed to check phone");
    }
};
/**
 * Update client
 */
export const update = async (id, data) => {
    try {
        const client = await DB.client.findUnique({
            where: { id },
        });
        if (!client) {
            throw createError.notFound("Client");
        }
        // Hash password if provided
        const updateData = { ...data };
        if (data.Password) {
            updateData.Password = await hashPassword(data.Password);
        }
        await DB.client.update({
            where: { id },
            data: updateData,
        });
        logger.info("Client updated", { clientId: id });
        return `Client ${id} has been updated`;
    }
    catch (error) {
        if (error instanceof AppError)
            throw error;
        logger.error("Failed to update client", error instanceof Error ? error : new Error(String(error)), {
            id,
        });
        throw createError.database("Failed to update client");
    }
};
/**
 * Soft delete client
 */
export const deleteClient = async (id) => {
    try {
        const client = await DB.client.findUnique({
            where: { id },
        });
        if (!client) {
            throw createError.notFound("Client");
        }
        await DB.client.update({
            where: { id },
            data: {
                deletedAt: new Date(),
            },
        });
        logger.info("Client deleted", { clientId: id });
        return "Client deleted successfully";
    }
    catch (error) {
        if (error instanceof AppError)
            throw error;
        logger.error("Failed to delete client", error instanceof Error ? error : new Error(String(error)), {
            id,
        });
        throw createError.database("Failed to delete client");
    }
};
//# sourceMappingURL=client.refactor.mjs.map