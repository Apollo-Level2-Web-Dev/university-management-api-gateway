import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsZodSchema = z.object({
    NODE_ENV: z.string(),
    PORT: z
        .string()
        .default('3030')
        .refine((val) => Number(val)),
    JWT_SECRET: z.string(),
    REDIS_URL: z.string(),
    AUTH_SERVICE_URL: z.string(),
    CORE_SERVICE_URL: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwt: {
        secret: envVars.JWT_SECRET
    },
    redis: {
        url: envVars.REDIS_URL
    },
    authServiceUrl: envVars.AUTH_SERVICE_URL,
    coreServiceUrl: envVars.CORE_SERVICE_URL
};
