import { PrismaClient } from "@prisma/client/edge";  // Edge Client
import { withAccelerate } from "@prisma/extension-accelerate";

// Initialize Prisma with Accelerate
const prisma = new PrismaClient().$extends(withAccelerate());

export default prisma;
