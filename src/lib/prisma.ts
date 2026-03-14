import { PrismaClient } from '@prisma/client';

// In Prisma 7, the client reads DATABASE_URL from the environment
// automatically at runtime — no constructor arguments needed.
// The URL is also declared in prisma.config.ts for Migrate.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Prevent multiple instances in development (e.g. Next.js hot-reload)
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
