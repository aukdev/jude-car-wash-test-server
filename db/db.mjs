import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";
const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST || "localhost",
    port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 3306,
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_NAME || "",
    connectionLimit: 5,
});
const DB = new PrismaClient({ adapter });
export default DB;
//# sourceMappingURL=db.mjs.map