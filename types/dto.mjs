/**
 * Type Definitions for DTOs and API Contracts
 */
export const parsePaginationParams = (page, size) => {
    const pageNum = Math.max(1, Number(page) || 1);
    const sizeNum = Math.max(1, Math.min(100, Number(size) || 10));
    const offset = (pageNum - 1) * sizeNum;
    return { page: pageNum, size: sizeNum, offset };
};
export const calculateTotalPages = (count, pageSize) => {
    return Math.ceil(count / pageSize);
};
//# sourceMappingURL=dto.mjs.map